<template>
  <div class="cls" :style="{height: `${height}px`}">
    <component v-if="slider" :is="slider" animation="fade" :style="{height: `${height}px`}">
      <component v-if="sliderItem" :is="sliderItem" v-for="(slide, index) in sliders" :key="index">
        <div class="cover item" :class="slide.classes">sdf</div>
      </component>
    </component>
  </div>
</template>

<script>
import { Slider, SliderItem } from 'vue-easy-slider'
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10)
      break
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      break
    default:
      return 0
      break
  }
}
export default {
  data() {
    return {
      height: 0,
      slider: null,
      sliderItem: null,
    }
  },
  computed: {
    banners() {
      return this.$themeConfig.banners
    },
    sliders() {
      let idSources = [0, 1, 2, 3, 4, 5, 6]
      let ids = [...idSources]
      let colors = ['red', 'amber', 'purple']
      return this.banners.map((item) => {
        if (!ids.length) {
          ids = [...idSources]
        }
        let id = ids[randomNum(0, ids.length - 1)]
        ids = ids.filter((item) => item !== id)
        return {
          classes: [colors[randomNum(0, 2)], `banner${id + 1}`],
        }
      })
    },
  },
  mounted() {
    import('@theme/utils/global.js').then((m) => {
      this.height = window.innerHeight
    })
    import('vue-easy-slider').then((module) => {
      this.slider = module.Slider
      this.sliderItem = module.SliderItem
    })
  },
  methods: {},
}
</script>

<style lang="less" scoped>
.cls {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: -64px;
}

.cover {
  height: 100%;
  width: 100%;
  background-size: cover;
  opacity: 1;
}

.item {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

.red:before,
.red:after {
  background-color: #f44336 !important;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: '';
  opacity: 0.3;
}

.amber:before,
.amber:after {
  background-color: #ffc107 !important;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: '';
  opacity: 0.3;
}

.purple:before,
.purple:after {
  background-color: #9119f3 !important;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  left: 0;
  top: 0;
  content: '';
  opacity: 0.3;
}

.banner1 {
  background-image: url('../public/banner/0.jpg');
}
.banner2 {
  background-image: url('../public/banner/1.jpg');
}
.banner3 {
  background-image: url('../public/banner/2.jpg');
}
.banner4 {
  background-image: url('../public/banner/3.jpg');
}
.banner5 {
  background-image: url('../public/banner/4.jpg');
}
.banner6 {
  background-image: url('../public/banner/5.jpg');
}
.banner7 {
  background-image: url('../public/banner/6.jpg');
}
</style>

