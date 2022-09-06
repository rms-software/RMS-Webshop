<template>
  <div id="card">
    <img :src="product.image" id="card-img" />
    <div id="title">
        {{ product.name }}<br />
        € {{ product.basePrice.toFixed(2) }}
    </div>

    <br />

    <button class="btn confirm" @click="$emit('order')">Bestel</button>
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            require: true
        }
    }
}
</script>

<style scoped lang="scss">
#card {
    width: 200px;
    margin: 20px;
    background: #eee;
    padding: 10px;
    text-align: center;
    border-radius: 10px;

    #card-img {
        width: 100%;
        height: 140px;
        object-fit: cover;
    }
}
</style>