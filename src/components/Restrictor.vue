<template>
  <div>
    <div id="wrapper" v-if="enabled">
      <div id="restrictor" :style="`max-width: ${width}px`">
        <slot></slot>
      </div>
    </div>

    <div v-else>
      <slot></slot>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 800,
    },

    enabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>


<style scoped lang="scss">
#wrapper {
  display: flex;
  justify-content: center;

  #restrictor {
    width: 100%;
  }
}
</style>