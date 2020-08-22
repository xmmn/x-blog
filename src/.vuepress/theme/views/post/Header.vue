<template>
  <div class="card-content article-info">
    <div class="row tag-cate">
      <div class="col s7">
        <div class="article-tag">
          <a :href="goto(tag.path)" v-for="(tag, index) in postInfo.tags" :key="index">
            <span class="chip bg-color">{{tag.label}}</span>
          </a>
        </div>
      </div>
      <div class="col s5 right-align">
        <div class="post-cate">
          <template v-for="(cat, index) in postInfo.categories">
            <i class="fas fa-bookmark fa-fw icon-category" :key="`icon-${index}`"></i>

            <a :href="goto(cat.path)" class="post-category" :key="`a-${index}`">{{cat.label}}</a>
          </template>
        </div>
      </div>
    </div>

    <div class="post-info">
      <div class="post-date info-break-policy">
        <i class="far fa-calendar-minus fa-fw"></i>
        发布日期:&nbsp;&nbsp;
        {{postInfo.created_at}}
      </div>

      <div class="info-break-policy">
        <i class="far fa-file-word fa-fw"></i>
        文章字数:&nbsp;&nbsp;
        {{textLenText}}
      </div>

      <div class="info-break-policy">
        <i class="far fa-clock fa-fw"></i>
        阅读时长:&nbsp;&nbsp;
        {{readTimeText}}
      </div>
    </div>
  </div>
</template>

<script>
const perTextReadSeconds = 0.2;
export default {
  props: {
    textlen: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    postInfo() {
      return this.$frontmatter;
    },
    textLenText() {
      return `${this.textlen / 1000}K`;
    },
    readTimeText() {
      return `${((this.textlen * perTextReadSeconds) / 60).toFixed(2)}分`;
    },
  }
};
</script>

<style lang="less" scoped>
.article-info {
  padding: 20px 30px 1px 40px;
  margin-bottom: -5px;
}

.tag-cate {
  width: 100%;
  padding-bottom: 15px;
  margin-left: -0.75rem;
}


.article-info {
  .chip {
    display: inline-block;
    height: 32px;
    font-size: 13px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
    line-height: 32px;
    padding: 0 12px;
    border-radius: 16px;
    background-color: #e4e4e4;
    margin-bottom: 5px;
    margin-right: 5px;
  }
  .chip {
    font-size: 1rem;
    font-weight: 400;
    height: 25px;
    line-height: 24px;
    color: #fff;
    border-radius: 15px;
    margin-right: 5px;
    margin-bottom: 2px;
  }
}
.right-align {
  text-align: right;
  margin-right: -0.75rem;
}
.post-cate {
  float: right;
  color: #42b983;
  a {
    padding-right: 5px;
    color: #42b983;
    font-weight: 500;
  }
}
</style>