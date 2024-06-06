<template>
    <HeaderComponent />
    <IndexComponent />
    <FooterComponent />
    <GoToTop />
</template>

<script>
import IndexComponent from '@/components/IndexComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import GoToTop from '@/components/GoToTop.vue'


import HSHeader from '@/assets/vendor/hs-header/dist/hs-header.min.js';
import HSMegaMenu from '@/assets/vendor/hs-mega-menu/dist/hs-mega-menu.min.js';
import HSGoTo from '@/assets/vendor/hs-go-to/dist/hs-go-to.min.js';
import Swiper from 'swiper/bundle';

import '@/assets/js/hs.core.js';



export default {
  name: "HomeView",
  components: {
    IndexComponent, HeaderComponent, FooterComponent, GoToTop
  },
  mounted() {
    this.initializeScripts();
  },
  methods: {
    initializeScripts() {
      // INITIALIZATION OF NAVBAR
      // =======================================================
      new HSHeader('#header').init();

      // INITIALIZATION OF MEGA MENU
      // =======================================================
      const megaMenu = new HSMegaMenu('.js-mega-menu', {
        desktop: {
          position: 'left'
        }
      });
      console.log(megaMenu);

      // INITIALIZATION OF GO TO
      // =======================================================
      new HSGoTo('.js-go-to');

      // INITIALIZATION OF SWIPER
      // =======================================================
      var swiper = new Swiper('.js-swiper-clients', {
        slidesPerView: 2,
        breakpoints: {
          380: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
        },
      });
      console.log(swiper);
    }
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
