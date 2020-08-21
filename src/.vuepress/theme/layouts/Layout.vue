<template>
  <div>
    <x-header></x-header>
    <swipper-nav />
    <x-main></x-main>
  </div>
</template>

<script>
import XHeader from "@theme/components/header/index.vue";
import SwipperNav from "@theme/components/SwipperNav.vue";
import XMain from "@theme/components/Main.vue";
export default {
  components: { XHeader, SwipperNav, XMain },
};
</script>
<!--common styles-->
<style lang="less" src="../styles/base.less"></style>