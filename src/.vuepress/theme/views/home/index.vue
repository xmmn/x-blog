<template>
  <article id="articles" class="container articles">
    <div class="row article-row">
      <div
        class="article col s12 m6 l4 aos-init aos-animate"
        :class="{
          animated: currentHover === index,
          pulse: currentHover === index
        }"
        data-aos="zoom-in"
        v-for="(article, index) in articles"
        :key="article.key"
        @mouseenter="enter(index)"
        @mouseleave="leave"
      >
        <div class="card">
          <a :href="goto(article.path)">
            <div class="card-image">
              <img :src="article.frontmatter.cover" class="responsive-img" />

              <span class="card-title">{{article.frontmatter.title}}</span>
            </div>
          </a>

          <div class="card-content article-content">
            <div class="summary block-with-text">{{article.frontmatter.description}}</div>
            <div class="publish-info">
              <span class="publish-date">
                <i class="far fa-clock fa-fw icon-date"></i>
                {{article.frontmatter.created_at}}
              </span>
              <span class="publish-author">
                <template v-for="(cat, index) in  article.frontmatter.categories">
                  <i class="fas fa-bookmark fa-fw icon-category" :key="`icon-${index}`"></i>

                  <a :href="goto(cat.path)" class="post-category" :key="`a-${index}`">{{cat.label}}</a>
                </template>
              </span>
            </div>
          </div>

          <div class="card-action article-tags">
            <a :href="goto(tag.path)" v-for="(tag, index) in article.frontmatter.tags" :key="index">
              <span class="chip bg-color">{{tag.label}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import "aos/dist/aos.css";
export default {
  data() {
    return {
      currentHover: -1,
    };
  },
  computed: {
    pages() {
      return this.$site.pages || [];
    },

    articles() {
      return this.pages.filter((m) => m.frontmatter.isPost);
    },
  },

  mounted() {
    import("aos").then((module) => {
      const AOS = module.default;
      AOS.init();
    });
  },

  methods: {
    enter(index) {
      this.currentHover = index;
    },
    leave() {
      this.currentHover = -1;
    },
  },
};
</script>

<style scoped>
.pulse {
  position: relative;
  animation: mymove 2s infinite;
  -webkit-animation: mymove 2s infinite; /*Safari and Chrome*/
  animation-direction: alternate; /*轮流反向播放动画。*/
  animation-timing-function: ease-in-out; /*动画的速度曲线*/
  /* Safari 和 Chrome */
  -webkit-animation: mymove 2s infinite;
  -webkit-animation-direction: alternate; /*轮流反向播放动画。*/
  -webkit-animation-timing-function: ease-in-out; /*动画的速度曲线*/
}
@keyframes mymove {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}

@-webkit-keyframes mymove /*Safari and Chrome*/ {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}
</style>