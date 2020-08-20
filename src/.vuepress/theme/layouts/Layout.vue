<template>
  <div
    class="layout-main"
    :class="{ 'layout-main__nm--opened': nmOpened, 'layout-main__negative': negative }"
  >
    <meta itemprop="name" :content="$site.title" />
    <transition name="nav-mobile">
      <nav-mobile v-show="nmOpened" @click="closeMenu" />
    </transition>
    <component
      :is="layout"
      class="wrapper-body__nm"
      :class="{ 'wrapper-body__nm--opened': nmOpened }"
    >
      <div slot="view">asdafsf</div>
    </component>
  </div>
</template>

<script>
import LayoutBase from './LayoutBase'
export default {
  components: {
    LayoutBase,
    NavMobile: import(
      /* webpackChunkName = "NavMobile" */ '../components/NavMobile'
    ),
  },
  data() {
    return {
      nmOpened: true,
      negative: false,
    }
  },
  created() {
    console.log(this.$page)
  },
  computed: {
    layout() {
      return 'layout-' + (this.$page.frontmatter.layout || 'base')
    },
  },
  methods: {
    closeMenu() {},
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: auto;
  src: local('Poppins Bold'), local('Poppins-Bold'),
    url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2)
      format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Hack';
  src: url('../fonts/hack-regular.woff2?sha=3114f1256') format('woff2'),
    url('../fonts/hack-regular.woff?sha=3114f1256') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: 'ktquez';
  src: url('../fonts/icons/ktquez.eot?5awxug');
  src: url('../fonts/icons/ktquez.eot?5awxug#iefix') format('embedded-opentype'),
    url('../fonts/icons/ktquez.ttf?5awxug') format('truetype'),
    url('../fonts/icons/ktquez.woff?5awxug') format('woff'),
    url('../fonts/icons/ktquez.svg?5awxug#ktquez') format('svg');
  font-weight: normal;
  font-style: normal;
}
</style>
<style lang="css" scoped>
.layout-main {
  margin: 0;
  padding: 0;
}

.wrapper-body__nm {
  transition: transform 0.2s ease-in-out;
  transform-origin: top center;
}
</style>