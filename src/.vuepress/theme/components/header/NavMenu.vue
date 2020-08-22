<template>
  <ul class="right nav-menu">
    <li
      class="hide-on-med-and-down nav-item"
      :class="{
        'nav-show': current === index
    }"
      v-for="(nav, index) in navs"
      :key="nav.name"
      @mouseenter="enter(index)"
      @mouseleave="leave"
    >
      <a :href="goto('/')" class="waves-effect waves-light">
        <i class="fas" :class="nav.icon" style="zoom: 0.6;"></i>
        <span>{{nav.name}}</span>
      </a>
    </li>

    <!--搜索功能-->
  </ul>
</template>

<script>
export default {
  data() {
    return {
      current: -1
    }
  },
  computed: {
    navs() {
      return this.$themeConfig.navs
    },
  },
  methods: {
    enter(index) {
      this.current = index
    },
    leave() {
      this.current = -1
    },
  },
}
</script>

<style lang="less" scoped>
.right {
  float: right !important;
}

.nav-show i[aria-hidden='true'] {
  transform: rotate(180deg) !important;
  transition: all 0.3s;
}

.nav-show {
  background-color: #34495e4d; //遮罩颜色
}

.waves-effect {
  vertical-align: top;
}

.waves-light {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  user-select: none;
  vertical-align: middle;
  z-index: 1;
  transition: 0.3s ease-out;
}

@media only screen and (min-width: 601px) {
  i {
    height: 64px;
    line-height: 64px;
  }
}
</style>