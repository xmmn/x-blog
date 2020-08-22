<template>
  <header class="navbar-fixed">
    <nav id="headNav" class="nav-transparent" :class="{'bg-color': bodyMoved}">
      <div id="navContainer" class="container nav-wrapper">
        <div class="brand-logo">
          <a href="/" class="waves-effect waves-light">
            <!--<img src class="logo-img" />-->
            <span class="logo-span">{{$siteTitle}}</span>
          </a>
        </div>
        <!--导航部分-->
        <nav-menu />
      </div>

      <!--gitgub 地址导航-->
      <github-link v-if="bodyMoved" />
    </nav>
  </header>
</template>

<script>
import NavMenu from '@theme/components/header/NavMenu.vue'
import GithubLink from '@theme/components/header/GithubLink.vue'
export default {
  components: { NavMenu, GithubLink },
  data() {
    return {
      bodyMoved: false,
    }
  },
  mounted() {
    import('@theme/utils/global.js').then(() => {
      window.addEventListener('scroll', this.getScrollTop)
    })
  },
  methods: {
    getScrollTop() {
      var scrollTop = 0
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop
      } else if (document.body) {
        scrollTop = document.body.scrollTop
      }
      this.bodyMoved = scrollTop !== 0
    },
  },

  beforeDestroy() {
    import('@theme/utils/global.js').then(() => {
      window.removeEventListener('scroll', this.getScrollTop)
    })
  },
}
</script>

<style lang="less" scoped>
.navbar-fixed {
  width: 100%;
  position: relative;
  height: 56px;
  z-index: 997;

  nav {
    position: fixed;
    color: #fff;
    background-color: #ee6e73;
    width: 100%;
    height: 56px;
    line-height: 56px;
  }

  .nav-transparent {
    background-color: transparent !important;
    background-image: none;
    box-shadow: none;
  }

  .bg-color {
    background-image: linear-gradient(to right, #4cbf30 0%, #0f9d58 100%);
  }

  

  .nav-wrapper {
    position: relative;
    height: 100%;

    .brand-logo {
      position: absolute;
      color: #fff;
      display: inline-block;
      font-size: 2.1rem;
      padding: 0;

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

        .logo-span {
          font-size: 2rem;
        }
      }
    }
  }
}

</style>