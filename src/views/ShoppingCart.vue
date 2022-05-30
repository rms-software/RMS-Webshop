<template>
  <Restrictor :width="800">
    <div id="shopping-cart" v-if="cart.length > 0">
      <div id="header">
        <h3>Winkelwagen</h3>
        <div>{{ cart.length }} Items</div>
      </div>

      <hr />

      <div id="cart-list">
        <span class="thead">Producten</span>
        <span class="thead">Prijs</span>
        <span class="thead">Totaal</span>

        <template v-for="item in cart" class="cart-item">
          <span :key="item.id" class="overview">
            <img :src="item.product.image" class="item-pic" />
            <div>
              <b>{{ item.product.name }}</b><br />
              {{ item.amount }}x
            </div>
          </span>
          <span :key="item.id">€ {{ item.product.basePrice.toFixed(2) }}</span>
          <span :key="item.id">€ {{ (item.amount * item.product.basePrice).toFixed(2) }}</span>
        </template>
      </div>

      <hr />
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

    <Modal ref="orderModal" title="Bestelling plaatsen">
      <div>Totaal bedrag: € {{ totalPrice.toFixed(2) }}</div>

      <br />
      
      <!-- form for email, name, adress, phone number -->
      <div id="user-data-form">
        <label for="email">E-mail</label><br />
        <input type="email" class="form-control" id="email" /><br /><br />
        <label for="name">Naam</label><br />
        <input type="text" class="form-control" id="name" /><br /><br />
        <label for="address">Adres</label><br />
        <input type="text" class="form-control" id="address" /><br /><br />
        <label for="phone">Telefoonnummer</label><br />
        <input type="text" class="form-control" id="phone" />
      </div>

      <br />
      <button class="btn confirm" @click="placeOrder">Bestelling plaatsen</button>
    </Modal>
  </Restrictor>
</template>

<script>
// Import components
import Restrictor from "@/components/Restrictor"; 
import Modal from "@/components/Modal";

// Import rms connector
import rms from "@/rms_connector.js";

export default {
  components: {
    Restrictor,
    Modal
  },

  data: () => ({
    cart: [],
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
  },

  methods: {
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

    async registerOrderOnRMS(orders) {
      // TODO: await rms.placeOrder();
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

#cart-list {
  display: grid;
  grid-template-columns: auto 100px 100px;
  
  .thead {
    color: gray;
  }

  .overview {
    display: grid;
    grid-template-columns: 160px auto;
  }

  .item-pic {
    width: 150px;
    display: block;

    @media screen and (max-width: 600px) {
      display: none;
    }
  }
}

#user-data-form {
    input {
      width: 200px;
    }
  }
</style>