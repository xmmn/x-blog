<template>
  <nav class="container nav-mobile" aria-label="Navigation">
    <span itemprop="headline" class="nav-mobile__title">导航</span>
    <ul class="nav-mobile__list">
      <li
        class="nav-mobile__item"
        v-for="(item, index) in getItemsNavMobile"
        :key="`${item.label}-${index}`"
      >
        <router-link
          itemprop="url"
          class="nav-mobile__link"
          :to="item.path"
          @click.native="$emit('click')"
        >
          <bullet type="primary" />
          <span class="text">{{ item.label }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'SidNavMobileebar',

  components: {
    bullet: () =>
      import(/* webpackChunkName = "Bullet" */ '@theme/components/Bullet'),
  },

  computed: {
    getItemsNavMobile() {
      return []
    },
  },
}
</script>

<style scoped>
.nav-mobile {
  position: relative;
}

.nav-mobile__title {
  display: block;
  font-weight: bold;
  font-size: 18px;
  padding-top: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #78cfa8;
}

.nav-mobile__list {
  padding: 30px 0;
  display: flex;
  flex-wrap: wrap;
}

.nav-mobile__item {
  padding-right: 5px;
  margin-bottom: 10px;
}

.nav-mobile__link {
  padding: 12px;
  display: block;
  color: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  border-radius: 10px;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: flex;
}

.nav-mobile__link .bullet {
  width: 6px;
  height: 6px;
  top: 5px;
  margin-right: 8px;
}

.nav-mobile__link:hover {
  color: #41b883;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>