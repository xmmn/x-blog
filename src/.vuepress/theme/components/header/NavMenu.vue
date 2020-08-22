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
