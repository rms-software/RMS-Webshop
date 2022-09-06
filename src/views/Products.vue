<template>
  <div class="products-wrapper">
    <div class="products">
      <input type="text" class="form-control mb-3" placeholder="zoeken..." v-model="searchQuery" />
      <ProductList :products="filteredProducts" @order="askAddToCart" />
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
// Import components
import DoubleSection from "@/components/DoubleSection";
import ProductList from "@/components/ProductList.vue";
import Modal from "@/components/Modal.vue";

// Import RMS connector
import RMS from "@/rms_connector";

export default {
  components: {
    DoubleSection,
    ProductList,
    Modal,
  },

  data: () => ({
    products: [],
    orderCount: 1,
    orderProduct: null,
    searchQuery: '',
  }),

  async mounted() {
    this.products = await RMS.getProductList();
  },

  computed: {
    filteredProducts() {
      return this.products.filter(product => {
        return product.name.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },

  methods: {
    askAddToCart(product) {
      this.orderCount = 1;
      this.orderProduct = product;
      this.$refs.modalShoppingCart.isOpen = true;
    },

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
  },
};
</script>

<style scoped lang="scss">
.products-wrapper {
  text-align: center;

  .products {
    width: 80vw;
    text-align: left;
    max-width: 700px;
    display: inline-block;
  }

  #order-amount {
    width: 200px;
  }
}
</style>
