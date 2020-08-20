<template>
  <div class="cls">
    <x-header />
    <main id="main" class="container main">
      <slot name="view"></slot>
    </main>
    <x-footer />
  </div>
</template>
<script>
import XHeader from '../components/header'
import XFooter from '../components/footer'
export default {
    name: 'layoutbase',
    components: {
        XHeader,
        XFooter
    }
}
</script>

<style scoped>
.cls {
  background-color: #f7f7f7;
  padding: 0.4px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
}

.main {
  width: 100%;
  max-width: 1360px;
  padding-left: 24px;
  padding-right: 24px;
  min-height: 200px;
}
</style>