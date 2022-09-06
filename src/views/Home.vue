<template>
  <div>
    <div style="margin: 50px;flex-grow: 1;">
      <div class="content-wrapper">
        <div class="content">
          <span class="center" style="padding: 20px 0px">
            <h1>Bakkerij Adriaans</h1>
            <h3>Lekker tot de laatste kruimel… 🍞</h3>

            <p>
              Mijn naam is Tom Adriaans, ik ben 19 jaar en mijn bakkerij zit gevestigd in Zijtaart. Ik bak wekelijks vers brood, broodjes en  lekkernijen. Ik bezorg het ook! Bakkerij Adriaans begonnen in 2020, altijd bakken met een lach!
            </p>
          </span>

          <br><br><br>

          <div id="cards">
            <ProductCard
              v-for="product in highlightedProducts"
              :key="product.id"
              :product="product"
              @order="askAddToCart(product)"
            />
          </div>

          <br /><br />
          <div style="text-align: center">
            <button class="btn confirm" @click="$router.push('/producten')">Meer bestellen</button>
          </div>
        </div>
      </div>
    </div>  
    
    <!-- Modal for putting in shopping cart -->
    <Modal
      :title="`${orderProduct ? orderProduct.name : ''} bestellen`"
      ref="modalShoppingCart"
    >
      <br />
      <label for="amount">Aantal</label><br />
      <input
        v-model="orderCount"
        type="number"
        class="form-control"
        id="order-amount"
      />

      <br /><br /><br />

      <button type="button" class="btn confirm" @click="putItemInBasket">
        In winkelwagen stoppen
      </button>
    </Modal>
  </div>
</template>

<script>
import OverlayPopup from '@/components/OverlayPopup'

import RMS from '../rms_connector.js'

import ProductCard from "@/components/ProductCard.vue"
import Modal from "@/components/Modal.vue";
//import OrderList from '@/components/OrderList'

export default {
  components: {
    //OrderList,
    OverlayPopup,
    ProductCard,
    Modal
  },

  data: () => ({
    basketTotal: 0,
    activeProduct: {},
    basket: {},

    products: [
      
    ],
    orderCount: 1,
    orderProduct: null,
    highlightedProducts: []
  }),

  async mounted() {
    if (window.highlightedProducts) {
      this.highlightedProducts = window.highlightedProducts;
      return
    }

    const productHighlightOptions = await RMS.getProductList();
    const dailyString = (new Date()).toDateString();

    const hashCode1 = (dailyString + "1").hashCode() % productHighlightOptions.length;
    const hashCode2 = (dailyString + "2").hashCode() % (productHighlightOptions.length - 1);
    const hashCode3 = (dailyString + "3").hashCode() % (productHighlightOptions.length - 2);

    this.highlightedProducts = [
      productHighlightOptions.splice(hashCode1, 1)[0],
      productHighlightOptions.splice(hashCode2, 1)[0],
      productHighlightOptions.splice(hashCode3, 1)[0]
    ];

    window.highlightedProducts = this.highlightedProducts;
  },

  methods: {
    putItemInBasket() {
      // Store the amount and the item in
      // localstorage as basket
      const basket = JSON.parse(localStorage.getItem("basket") || "[]");
      
      basket.push({
        product: this.orderProduct,
        amount: this.orderCount,
      });

      // Condense the duplicate basket items into one item
      const condensedBasket = basket.reduce((acc, item) => {
        const existingItem = acc.find(
          (basketItem) => basketItem.product.id === item.product.id
        );

        if (existingItem)
          existingItem.amount = Number(existingItem.amount) + Number(item.amount);
        else
          acc.push(item);

        return acc;
      }, []);

      localStorage.setItem("basket", JSON.stringify(condensedBasket));

      // Close the modal again
      this.$refs.modalShoppingCart.isOpen = false;
    },
    
    askAddToCart(product) {
      this.orderCount = 1;
      this.orderProduct = product;
      this.$refs.modalShoppingCart.isOpen = true;
    },

    orderItem(productId) {
      this.productCount = 1;
      this.lessSpicy = false;
      this.activeProduct = JSON.parse(JSON.stringify(this.products[productId]));
      this.$refs.orderCount.show = true;
    },

    addProductsToBasket() {
      if (this.lessSpicy) {
        this.activeProduct.name += ' (minder pittig)';
      }

      const match = this.basket[this.activeProduct.name]

      if (!match)
        this.basket[this.activeProduct.name] = {
          count: this.productCount,
          price: this.activeProduct.price
        }
      else
        match.count = Number(match.count) + Number(this.productCount);

      this.$refs.orderCount.show = false;
      this.$refs.basketView.show = true;
      this.calcBasketTotal()
    },

    calcBasketTotal() {
      const basketProducts = Object.entries(this.basket).map(x => x[1]);
      this.basketTotal = basketProducts.reduce((acc, curr) => acc += curr.price * curr.count, 0)
    },

    GetOrderMessage() {
      let message = `Beste John, ik zou graag een bestelling willen plaatsen bij de Wit worstenbroodjes. %0A%0AIk zou graag het volgende willen bestellen:%0A`;

      Object.entries(this.basket).forEach(product => {
        message += `${product[1].count}x ${product[0]} %0A`
      })

      message += `%0ADat wordt dan in totaal ${this.basketTotal.toFixed(2)} euro, en ik zou de bestelling graag af willen halen op ${this.pickupDate}`

      return message
    }
  }
}
</script>


<style lang="scss">
@import "@/components/style.scss";

.content-wrapper {
  text-align: center;

  .content {
    max-width: 800px;
    display: inline-block;
    text-align: left;
  }
}

#cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.order-count-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  padding: 20px;

  button {
    font-size: 12px;
    margin-left: 20px;
  }

  input {
    width: 100px;
  }

  .order-count-counter {
    margin-bottom: 40px;
  }

  .order-count-announcement {
    text-align: center;
    font-weight: bold;
    font-size: large;
    margin-bottom: 40px;
  }

  .order-methods {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
    column-gap: 40px;

    .order-method-card {
      background: #eee;
      text-align: center;
      height: 100px;
      width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      
      &:hover {
        opacity: 0.6;
        cursor: pointer;
      }

      svg {
        height: 50px;
        width: 50px;
      }
    }
  }

  .basket-list {
    margin-bottom: 40px;
  }
}

.price {
  color: green;
}
</style>
