<template>
    <div id="header">
      <div id="logo-burger">
        <img :src="theme == 'halloween' ? imageHalloween : logo" alt="logo" id="logo" style="width: 80px;">
  
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="50" height="50" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round" @click="toggleMenu ">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>
  
      <div id="header-links" :class="{ closed: !opened }">
        <router-link v-for="link in navLinks" @click="opened = false" :to="link.to" :key="link.name">
          {{ link.name }}
          <span class="count" v-if="link.name === 'Winkelwagen' && basketCount > 0">
            {{ basketCount }}
          </span>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      opened: false,
      basketCount: 0,
      theme: theme,
      imageHalloween: 'https://media.discordapp.net/attachments/375936269907263489/1034188289734889544/Untitled.png'
}),

    mounted() {
      const that = this;
      that.basketCount = JSON.parse(localStorage.getItem("basket") || "[]").length;
      setInterval(() => {
        that.basketCount = JSON.parse(localStorage.getItem("basket") || "[]").length;
      });
    },
  
    props: {
        logo: {
          type: String,
          default: null
        },
  
        navLinks: {
          type: Array,
          default: () => []
        }
      },
  
    methods: {
      toggleMenu() {
        this.opened = !this.opened;
      }
    }
  };
  </script>
  
  <style scoped lang="scss">
  @import "@/neu-morphism.scss";
  
  #header {
    background: #eee;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
    position: relative;
  
    #logo-burger {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      padding-left: 50px;
  
      img {
        display: inline;
  
        @media screen and (max-width: 650px) {
          display: none;
        }
      }
  
      svg {
        margin-left: 20px;
        display: none;
  
        @media screen and (max-width: 650px) {
          display: inline;
        }
      }
    }
  
    @media screen and (max-width: 650px) {
      display: grid;
      justify-content: center;
      padding: 10px;
      margin-left: -60px;
  
      #header-links {
        display: grid;
        width: 100%;
  
        &.closed {
          display: none;
        }
  
        a {
          width: 50vw;
          margin-left: calc(25vw - 60px);
        }
      }
    }
  
    #header-links {
      .count {
        background: red;
        color: white;
        width: 25px;
        height: 25px;
        position: relative;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
      }

      a {
        color: #666;
        text-decoration: none;
        padding: 10px 20px;
        font-size: 18px;
  
        &.router-link-exact-active {
          background: orange;
          color: white;
          border-radius: 50px;
        }
      }
    }
  }
  </style>