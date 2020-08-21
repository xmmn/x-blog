<template>
  <div>asdfasdf</div>
</template>

<script>
export default {
  name: 'swiper-example-autoplay',
  title: 'Autoplay',
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
}
</script>

