<template>
  <article id="articles" class="container articles">
    <div class="row article-row">
      <div class="article col s12 m6 l4" v-for="article in articles" :key="article.key">
        <div class="card">
          <a :href="goto(article.path)">
            <div class="card-image">
              <img :src="article.frontmatter.cover" class="responsive-img" />

              <span class="card-title">{{article.frontmatter.title}}</span>
            </div>
          </a>

          <div class="card-content article-content">
            <div class="summary block-with-text">
              一个 bug 被隐藏的时间越长，修复这个 bug 的代价就越大。
              我曾经在 单元测试指南 一文中写到过单元测试的必要性和 Java 单元测试相关的工具及方法。单元测试能帮助我们在早期就规避、发现和修复很多不易察觉的 bug 和漏洞，而且
            </div>
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
export default {
  computed: {
    pages() {
      return this.$site.pages || [];
    },

    articles() {
      return this.pages.filter((m) => m.frontmatter.isPost);
    },
  },
};
</script>