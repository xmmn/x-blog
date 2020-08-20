<template>
  <div class="card-author box-default" :class="{ 'card-author--no-shadow': !shadow }">
    <div class="row">
      <div class="column xs-33">
        <img class="card-author__avatar" :src="author.avatar" itemprop="image" alt="xmmn" />
      </div>
      <div class="column xs-67 card-author-info">
        <div class="card-author-info__role">
          <bullet type="primary" />
          <span itemprop="jobTitle" class="meta-text">{{ author.role }}</span>
        </div>

        <div style="flex: 1; display: flex; align-items: center">
          <router-link
            itemprop="url"
            class="card-author__link"
            :to="`${$localeConfig.path}/authors/${author.nickname}.html`"
          >
            <h3 itemprop="name" class="card-author-info__title">{{ author.nickname }}</h3>
          </router-link>
        </div>

        <div class="card-author-info__joined">
          <span class="icon">enter</span>
          <time-provider type="ago" :date="author.created_at">
            <span class="text" slot-scope="{ time }">joined {{ time }}</span>
          </time-provider>
          <span itemprop="alternateName" class="text meta-text--primary">({{author.nickname }})</span>
        </div>

        <div class="card-author-social">
          <ul class="card-author-social__list">
            <li
              class="card-author-social__item"
              v-for="(network, index) in author.social"
              :key="`${network.name}-${index}`"
            >
              <a
                itemprop="sameAs"
                :href="network.url"
                class="card-author-social__link"
                rel="nofollow noopener"
                target="_blank"
              >
                <span
                  class="icon card-author-social__icon"
                  :class="`icon-${network.name}`"
                >{{ network.name }}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardAuthor',

  components: {
    bullet: () =>
      import(/* webpackChunkName = "Bullet" */ '@theme/components/Bullet'),
    TimeProvider: () =>
      import(
        /* webpackChunkName = "Newsletter" */ '@theme/components/Time/Provider'
      ),
  },

  props: {
    shadow: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      author: {
        avatar: require('../public/avator.jpg'),
        role: 'WEB DEVELOPER',
        nickname: 'xmmn',
        social: [
          {
            name: 'github',
            link: 'https://github.com/xmmn',
          },
        ],
        created_at: '1989-01-01',
      },
    }
  },

  methods: {},
}
</script>

<style scoped>
.box-default {
  border-radius: 20px;
  padding: 16px 20px;
  box-shadow: 1px 1px 99px #e2e2e2;
  background-color: #fff;
  border: 1px solid #fff;
}
.card-author {
  position: relative;
  max-height: 150px;
  max-width: 500px;
}

.card-author--no-shadow .box-default {
  box-shadow: none;
}

.card-author__avatar {
  width: 100%;
  max-width: 120px;
  max-height: 120px;
  border-radius: 50%;
}

.card-author__link:hover {
  color: #41b883;
}

.card-author-info{
    display: flex;
    flex-direction: column;
}

.card-author-info .column {
  padding-left: 15px !important;
}

.card-author-info__joined {
  color: #343434;
  font-size: 0.875rem;
  margin-top: 2px;
}

.card-author-info__joined .icon {
  top: 5px;
  font-size: 1rem;
  color: black;
}

.card-author-info__joined .text {
  font-size: 0.75rem;
}

.card-author-social__list {
  margin-left: -12px;
}

.card-author-social__item {
  display: inline-flex;
  margin-right: 2px;
}

.card-author-social__link {
  padding: 8px 10px;
}

.card-author-social__icon {
  font-size: 1.25rem;
}

.meta-text {
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 400;
}

.row {
  display: flex;
}

.xs-33 {
  flex: 1;
}

.xs-67 {
  flex: 2;
}
</style>
