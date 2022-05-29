<template>
  <div class="overlay" v-if="show">
    <slot></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false 
  })
}
</script>

<style>
.overlay {
  position: fixed;
  background: white;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
}
</style>