<template>
  <div id="footer">
    <a
      class="contact-item"
      rel="noopener"
      :href="`https://www.facebook.com/${socials.facebookLink}`"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-facebook"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
        />
      </svg>
      {{ socials.facebook }}
    </a>

    <a
      class="contact-item"
      rel="noopener"
      :href="`mailto:${socials.email}`"
      target="_blank"
    >
      <div class="social">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-mail"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3 7 12 13 21 7" />
        </svg>
        {{ socials.email }}
      </div>
    </a>

    <a
      class="contact-item"
      rel="noopener"
      :href="`tel:${socials.tel}`"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-whatsapp"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path
          d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"
        />
      </svg>
      {{ socials.tel }}
    </a>

    <a
      rel="noopener"
      :href="`https://api.whatsapp.com/send?phone=${socials.tel}&app=DWWSite`"
      target="_blank"
      class="contact-item"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-phone"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#000000"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path
          d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
        />
      </svg>
      {{ socials.tel }}
    </a>

    <br />

    <div class="contact-item">&nbsp;&nbsp;&nbsp;Version: {{ version }}</div>
  </div>
</template>
  
  <script>
import { version } from "@/../package";

export default {
  props: {
    socials: {
      type: Object,
      default: () => {},
    },
  },

  data: () => ({
    version,
  }),
};
</script>
  
  <style scoped lang="scss">
#footer {
  background: #eee;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px 10px;
  position: relative;
  margin-top: 10px;

  a {
    color: black;
  }

  .contact-item {
    display: flex;
    margin-bottom: 4px;

    svg {
      margin: 0 10px;
    }
  }
}
</style>