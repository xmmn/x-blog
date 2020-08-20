<template>
  <div class="row">
    <navigation class="header-navigation" v-if="$themeConfig.topNavigation" />
    <div class="column xs-33">
      <hamburguer class="header-top__hamburguer" :open="openMenu" @click="toggleMenuMobile" />
    </div>
    <div class="column xs-33">
      <!--返回首页-->
    </div>
    <div class="column xs-33">
      <search />
    </div>
  </div>
</template>

<script>
import Hamburguer from '../Hamburguer.vue'
import Search from './Search.vue'
import Navigation from './Navigation.vue'
export default {
  components: { Hamburguer, Search, Navigation },
  data() {
    return {
      openMenu: false,
    }
  },
  methods: {
    toggleMenuMobile() {
      this.openMenu = !this.openMenu
    },
  },
}
</script>

<style scoped>
.row {
  position: relative;
  padding: 30px 20px 24px;
  background-color: #fff;
  display: flex;
}

.header-top__hamburguer {
  position: relative;
  transform: rotate(90deg);
}

.column {
  display: flex;
  align-items: center;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
}

.xs-33 {
  flex: 1;
}
</style>