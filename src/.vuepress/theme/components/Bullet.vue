<template>
  <span class="bullet no_bw" :class="`bullet--${type} bullet--${size}`"></span>
</template>

<script>
export default {
  name: 'Bullet',

  props: {
    type: {
      type: String,
      default: 'html',
    },
    size: String,
  },
}
</script>

<style scoped>
.bullet {
  position: relative;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background-color: black;
  display: inline-block;
}

.bullet--small {
  width: 6px;
  height: 6px;
}

.bullet--primary {
  background-color: #41b883;
}
</style>
