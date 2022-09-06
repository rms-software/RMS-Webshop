<template>
  <div class="number-counter">
    <span class="button" id="left" @click="decrement">-</span>
    <span id="counter">{{ value }}</span>
    <span class="button" id="right" @click="increment">+</span>
  </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        increment() {
            this.$emit('input', this.value + 1)
        },
        decrement() {
            if (this.value <= 0)
                return

            this.$emit('input', this.value - 1)
        }
    }
}
</script>

<style scoped lang="scss">
.number-counter {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 120px;
    height: 40px;

    .button {
        user-select: none;
        background: orange;
        padding: 10px 20px;
        display: inline-block;
        color: white;
        font-weight: bold;
        text-align: center;

        &:hover {
            cursor: pointer;
        }
    }

    #counter {
        padding: 10px;
        overflow: hidden;
        width: 10px;
        display: inline-block;
        text-align: center;
    }
}

</style>