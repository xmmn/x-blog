<template>
  <div>
      {{pages.map(item => item.regularPath).join('\n')}}
  </div>
</template>

<script>
export default {
  computed: {
    pages() {
      return this.$site.pages || [];
    },
  },
};
</script>

<style lang="less" scoped>
</style>