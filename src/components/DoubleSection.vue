<template>
  <div class="double-section">
    <span class="left">
      <slot name="left"></slot>
    </span>
    
    <span>
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
@import "./style.scss";

.double-section {
  display: grid;
  grid-template-columns: 1fr 1fr;

  

  @media only screen and (max-width: $size-tablet) {
    & {
      display: block;
    }

    
  }

  @media only screen and (min-width: $size-tablet) {
    .left {
      margin-right: 20px;
    }
  }
}
</style>