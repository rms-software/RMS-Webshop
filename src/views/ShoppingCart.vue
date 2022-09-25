<template>
  <div class="wrapper">
    <br />
    <Restrictor :width="800" enabled>
    <div id="shopping-cart" v-if="cart.length > 0">
      <div id="header">
        <h3>Winkelwagen</h3>
        <div>{{ cart.length }} Items</div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th class="desktop">Aantal</th>
            <th class="desktop">Prijs</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.product.id" class="cart-item">
            <td class="desktop">
              <b>{{ item.product.name }}</b> <br /><br />
            </td>
            <td class="desktop">
              <div class="btn-group">
                <button @click="deleteItem(item.product)" class="btn btn-outline-primary">Delete</button>
                <input class="form-control outline-primary form-control-sm" type="number" v-model="item.amount" @input="updateBasket" />
              </div>
              
            </td>
            <td class="desktop">€ {{ item.product.basePrice.toFixed(2) }}</td>

            <td class="mobile">
              <b>{{ item.product.name }}</b> <br /><br />
              <div class="btn-group">
                <button @click="deleteItem(item.product)" class="btn btn-outline-primary">Delete</button>
                <input class="form-control outline-primary form-control-sm" type="number" v-model="item.amount" @input="updateBasket" />
              </div>
              
              <br />
            </td>
          </tr>
        </tbody>
      </table>

      <br><br><br><br>

      <div id="footer">
        <h3>Totaal</h3>
        <div>€ {{ totalPrice.toFixed(2) }}</div>
      </div>

      <br /><br />

      <button class="btn confirm" @click="askPlaceOrder">Bestellen</button>
    </div>

    <div v-else>
      Geen producten in uw winkelmand
    </div>
  </Restrictor>

  <Modal ref="orderModal" title="Bestelling plaatsen">
      <div>Totaal bedrag: € {{ totalPrice.toFixed(2) }}</div>

      <br />
      
      <!-- form for email, name, adress, phone number -->
      <div id="user-data-form">
        <label for="email">E-mail</label><br />
        <input v-model="orderPersonData.email" type="email" class="form-control" id="email" /><br /><br />
        
        <label for="name">Naam</label><br />
        <input v-model="orderPersonData.name" type="text" class="form-control" id="name" /><br /><br />
        
        <label for="address">Adres</label><br />
        <input v-model="orderPersonData.address" type="text" class="form-control" id="address" /><br /><br />
        
        <label for="phone">Telefoonnummer</label><br />
        <input v-model="orderPersonData.phoneNumber" type="text" class="form-control" id="phone" /><br /><br />
        
        <label for="comment">Opmerking</label><br />
        <textarea v-model="orderPersonData.comment" id="comment"></textarea><br /><br />
        
        <template v-if="rms.settings.delivery">
          <label for="delivery">Bezorgen</label><br />
          <input v-model="orderPersonData.delivery" type="checkbox" class="" id="delivery" /><br /><br />        
          
          <label for="delivery" v-if="orderPersonData.delivery">Bezorg datum</label><br />
          <select v-model="orderPersonData.deliveryDate" class="form-control" v-if="orderPersonData.delivery">
            <option v-for="day in deliveryDays" :key="day">
              Zaterdag {{ day }}
            </option>
          </select>
        </template>
      </div>

      <br />
      <button class="btn confirm" @click="placeOrder">Bestelling plaatsen</button>
    </Modal>
  </div>
</template>

<script>
// Import components
import Restrictor from "@/components/Restrictor.vue"; 
import Modal from "@/components/Modal";
import NumberCounter from "@/components/NumberCounter";

// Import rms connector
import rms from "@/rms_connector.js";

export default {
  components: {
    Restrictor,
    Modal,
    NumberCounter
  },

  data: () => ({
    cart: [],
    orderPersonData: {
      email: '',
      name: '',
      address: '',
      phoneNumber: '',
      comment: '',
      delivery: false,
      deliveryDate: ''
    },
    deliveryDays: [],
    rms
  }),

  computed: {
    totalPrice() {
      return this.cart.reduce((total, item) => {
        return total + (item.amount * item.product.basePrice);
      }, 0);
    },
  },

  mounted() {
    this.cart = JSON.parse(localStorage.getItem("basket") || "[]");
    this.deliveryDays = this.saterdaysInFuture(10);
  },

  methods: {
    saterdaysInFuture(numDays) {
      // Get an array of dates
      // representing the next x saturdays in the future
      var dates = [];
      var today = new Date();
      var nextSaturday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (6 - today.getDay()));
      for (var i = 0; i < numDays; i++) {
        dates.push(new Date(nextSaturday.getFullYear(), nextSaturday.getMonth(), nextSaturday.getDate() + (i * 7)));
      }

      // Format the dates like 30/Aug/2022
      var formattedDates = [];
      for (var i = 0; i < dates.length; i++) {
        formattedDates.push(dates[i].getDate() + "/" + (dates[i].getMonth() + 1) + "/" + dates[i].getFullYear());
      }
      return formattedDates;
    },

    deleteItem(item) {
      console.log(item)

      // Remove the item based on its id
      this.cart = this.cart.filter(cartItem => cartItem.product.id !== item.id);
      
      // Update the local storage
      this.updateBasket();
    },

    askPlaceOrder() {
      this.$refs.orderModal.isOpen = true;
    },

    async placeOrder() {
      // print a list of all the items in the basket
      const cart = JSON.parse(localStorage.getItem("basket") || "[]");

      // Register the order on RMS
      await this.registerOrderOnRMS(cart);

      // Clear the cart
      localStorage.setItem("basket", [])

      // Reload cart
      this.cart = JSON.parse(localStorage.getItem("basket") || "[]");

      // Close popup
      this.$refs.orderModal.isOpen = false;

      alert("Bestelling is geplaatst");
    },

    updateBasket() {
      // Remove cart items that have 0
      this.cart = this.cart.filter(item => item.amount > 0);

      // Save to local storage
      const newJson = JSON.stringify(this.cart);
      localStorage.setItem("basket", newJson);
    },

    async registerOrderOnRMS(orders) {
      const data = this.orderPersonData;

      const orderItems = [];

      // Loop over items in cart
      this.cart.forEach(cartItem => {

        // Loop over the amount of products
        orderItems.push({
          productId: cartItem.product.id,
          settings: {},
          count: cartItem.amount
        });
      });

      console.log(orderItems);

      rms.placeOrder({
        customerDetails: {
          address: data.address,
          email: data.email,
          name: data.name,
          phoneNumber: data.phoneNumber,
          delivery: '' + data.delivery,
          deliveryDate: data.deliveryDate,
          comment: data.comment
        },

        orderItems
      });
    }
  }
}
</script>

<style scoped lang="scss">
#header, #footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


.item-pic {
  width: 150px;
  height: 150px;
  object-fit: cover;
  display: block;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

#user-data-form {
  input.form-control {
    width: 200px;
  }
}

.wrapper {
  margin: 20px;
}
</style>