<template>
  <div id="app">
    <template id="connection-wrapper" v-if="rmsConnection">
      <Header
        :logo="companyInfo.companyLogo"
        :navLinks="navLinks"
      />

      <div id="view-wrapper">
        <router-view />
      </div>

      <Footer :socials="companyInfo.socials"
              :image="companyInfo.companyLogo" />    
    </template>
    <div v-else id="connection-error">
      ERROR: Connection with server failed
    </div>
  </div>
</template>

<script>
// Import components
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Import RMS
import RMS from './rms_connector'

export default {
  components: {
    Header,
    Footer
  },

  async mounted() {
    this.rmsConnection = await RMS.testConnection();
    
    this.companyInfo = await RMS.getCompanyInfo();
    document.title = this.companyInfo.companyName;

    // set favicon
    document.getElementById('favicon').href = this.companyInfo.companyLogo;
    
  },

  data: () => ({
    companyInfo: {},
    rmsConnection: true,
    navLinks: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Producten',
        to: '/producten'
      },
      {
        name: 'Winkelwagen',
        to: '/cart'
      }
    ],

    socials: [
      {
        type: 'facebook',
        link: 'https://www.facebook.com/De-Wit-Worstenbrood-100184555272377/',
        name: 'De Wit Worstenbrood'
      },
      {
        type: 'at',
        link: 'mailto:john@dewitworstenbrood.nl',
        name: 'john@dewitworstenbrood.nl'
      },
      {
        type: 'phone',
        link: 'tel:31610184265',
        name: '31610184265'
      },
      {
        type: 'whatsapp',
        link: 'https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=Hallo, ik zou graag <aantal> <product> willen afhalen, wanneer kan ik ze komen ophalen?',
        name: '31610184265'
      }
    ]
  })
}
</script>


<style lang="scss">
@import "@/components/style.scss";

#view-wrapper {
  margin: 50px 10px;
  flex-grow: 1
}

#connection-error {
  text-align: center;
  padding-top: 50vh;
}
</style>
