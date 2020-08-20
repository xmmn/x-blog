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
      <div slot="view">
        <component :is="view" />
      </div>
    </component>
  </div>
</template>

<script>
import LayoutBase from "@theme/layouts/LayoutBase";
import NavMobile from "@theme/components/NavMobile.vue";
import EventBus from "@theme/plugins/EventBus.js";

// views
import Post from '@theme/views/post/index.vue'

export default {
  components: {
    LayoutBase,
    NavMobile,

    Post
  },
  data() {
    return {
      nmOpened: false,
      negative: false,
    };
  },
  created() {
    EventBus.$on("show_nm", (data) => {
      this.nmOpened = data;
    });
  },
  computed: {
    layout() {
      return "layout-" + (this.$page.frontmatter.layout || "base");
    },
    view() {
      return this.$page.frontmatter.view || 'Post';
    },
  },
  methods: {
    closeMenu() {},
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}

ul,
ol {
  list-style-type: none;
}

.icon {
  font-family: "ktquez" !important;
  position: relative;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  letter-spacing: 0;
  font-feature-settings: "liga";
  font-variant-ligatures: discretionary-ligatures;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-display: auto;
  src: local("Poppins Bold"), local("Poppins-Bold"),
    url(https://fonts.gstatic.com/s/poppins/v5/pxiByp8kv8JHgFVrLCz7Z1xlFQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Hack";
  src: url("../fonts/hack-regular.woff2?sha=3114f1256") format("woff2"),
    url("../fonts/hack-regular.woff?sha=3114f1256") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: auto;
}

@font-face {
  font-family: "ktquez";
  src: url("../fonts/icons/ktquez.eot?5awxug");
  src: url("../fonts/icons/ktquez.eot?5awxug#iefix") format("embedded-opentype"),
    url("../fonts/icons/ktquez.ttf?5awxug") format("truetype"),
    url("../fonts/icons/ktquez.woff?5awxug") format("woff"),
    url("../fonts/icons/ktquez.svg?5awxug#ktquez") format("svg");
  font-weight: normal;
  font-style: normal;
}
</style>

<style lang="less" >
h1, h2, h3, h4, h5, h6, ol, ul, pre, table, figure { margin-bottom: 1.2em }
</style>

<style lang="css" scoped>
.layout-main {
  margin: 0;
  padding: 0;
}

.layout-main__nm--opened {
  background-color: #304255;
}

.wrapper-body__nm {
  transition: transform 0.2s ease-in-out;
  transform-origin: top center;
}

.wrapper-body__nm--opened {
  border-radius: 20px;
  overflow: hidden;
  transform: perspective(400px) scale3d(0.85, 0.85, 1);
}
</style>