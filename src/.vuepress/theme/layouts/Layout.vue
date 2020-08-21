<template>
  <div>
    <x-header></x-header>
    <swipper-nav />
    <Content></Content>
  </div>
</template>

<script>
import XHeader from '@theme/components/header/index.vue'
import SwipperNav from '@theme/components/SwipperNav.vue'
export default {
  components: { XHeader, SwipperNav },
}
</script>
<!--common styles-->
<style lang="less" src="../styles/base.less"></style>