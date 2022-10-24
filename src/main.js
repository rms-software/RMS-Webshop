import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'

import Home from '@/views/Home'
import Products from '@/views/Products'
import Reviews from '@/views/Reviews'
import ShoppingCart from '@/views/ShoppingCart'

import "./main.scss"

import VueGtag from "vue-gtag";

import {
  uniBars, uniFacebook, uniPhone, uniAt, uniWhatsapp, uniEnvelope, uniStar
} from 'vue-unicons/dist/icons'

String.prototype.hashCode = function() {
  var hash = 0, i, chr;
  if (this.length === 0) return hash;
  for (i = 0; i < this.length; i++) {
    chr   = this.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

Unicon.add([
  uniBars, uniFacebook, uniPhone, uniAt, uniWhatsapp, uniEnvelope, uniStar
])

Vue.use(Unicon);
Vue.use(VueRouter);

Vue.use(VueGtag, {
  config: { id: "G-LLJJC2YYJ6" },
  appName: 'Dewit worstenbrood website',
  pageTrackerScreenviewEnabled: true
}, router);

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '*', component: Home, name: 'home' },
  { path: '/home', component: Home, name: 'home' },
  { path: '/cart', component: ShoppingCart, name: 'winkelwagen' },
  { path: '/producten', component: Products, name: 'producten' },

  { path: '/reviews', component: Reviews, name: 'reviews' },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
