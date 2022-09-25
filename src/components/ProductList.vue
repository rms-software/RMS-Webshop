<template>
  <div class="order-list">
    <br />
    <div v-for="(product, index) in products" :key="index">
        <DoubleSection>
            <p slot="left" class="product-image-wrapper" style="display: flex; align-items: center; height: 100%">
                <img :src="product.image" class="product-image" :alt="product.name + ' product image'" />
            </p>

            <div slot="right" class="product-info">
                <div class="title">
                    {{ product.name }}
                </div>

                <div class="weight">
                    {{ product.weight }} • <span class="price">€ {{ product.basePrice.toFixed(2) }}</span>
                </div>

                <div class="description" v-html="nl2br(noNull(product.description))"></div>

                <div>
                    <button class="btn" @click="$emit('order', product)">BESTELLEN € {{ product.basePrice.toFixed(2) }} </button>
                </div>
            </div>
        </DoubleSection>

        <br />
        <hr style="color: white"/>
    </div>
    
  </div>
</template>

<script>
import DoubleSection from "@/components/DoubleSection"

export default {
    props: {
        products: {
            type: Array,
            required: true
        }
    },

    components: {
        DoubleSection
    },

    methods: {
        noNull(input) {
            if (input === null || input === "null")
                return "";

            return input;
        },

        nl2br(input) {
            return input.replace(/\n/g, '<br />');
        }
    }
}
</script>

<style scoped lang="scss">
.product-image-wrapper {
    text-align: center;
    
    .product-image {
        width: 100%;
        border-radius: 20px;
        filter: drop-shadow(0px 5px 4px #00000060);
    }
}

.product-info {
    div {
        padding-top: 20px;

        &.title {
            font-weight: bold;
            font-size: x-large;
        }
    }

    button {
        background: orange;
        font-weight: bold;
        color: white;
        border-radius: 8px;

        &:hover {
            background: rgb(209, 178, 121);
            cursor: pointer;
        }
    }

    .price {
        color: green;
        font-weight: bold;
    }

    .weight {
        color: gray;
        margin-top: -20px;
    }
    
}

</style>