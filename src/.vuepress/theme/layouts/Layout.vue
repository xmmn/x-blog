<template>
  <div>
    <x-header></x-header>
    <swipper-nav />
    <component :is="view"></component>
  </div>
</template>

<script>
import XHeader from "@theme/components/header/index.vue";
import SwipperNav from "@theme/components/SwipperNav.vue";
import Post from "@theme/views/post/index.vue"
import Home from "@theme/views/home/index.vue"
export default {
  components: {
    XHeader,
    SwipperNav,

    Post,
    Home
  },
  computed: {
    view() {
      console.log(this.$frontmatter.view || "home")
      return this.$frontmatter.view || "home";
    },
  },
};
</script>
<!--common styles-->
<style lang="less" src="../styles/base.less"></style>