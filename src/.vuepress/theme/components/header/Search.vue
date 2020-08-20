<template>
  <div style="width: 100%">
    <transition name="bottom-top">
      <div class="search-box" v-if="show" :class="{ 'search-box--show': show }">
        <label for="query">
          <input
            id="query"
            type="text"
            ref="inputSearch"
            class="search-box__input reset-input"
            placeholder="查找博客"
            autocomplete="off"
            spellcheck="false"
            @input="query = $event.target.value"
          />
        </label>
        <nav class="suggestions" v-if="query">
          <ul class="suggestions__list">
            <li v-for="sug in suggestions"></li>
          </ul>
        </nav>
      </div>
    </transition>
    <span class="icon search__icon" v-html="getIcon" @click="toggle"></span>
  </div>
</template>

<script>
export default {
  computed: {
    getIcon() {
      return this.show ? 'cancel' : 'search'
    },
    suggestions() {
      const query = this.query.trim().toLowerCase()
      if (!query) {
        return []
      }
      const { pages } = this.$site
      console.log(pages)
    },
  },
  data() {
    return {
      show: false,
      query: '',
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
      if (this.show) this.setFocus()
    },
    setFocus() {
      setTimeout(() => {
        this.reset()
        this.$refs.inputSearch.focus()
      }, 400)
    },
    reset() {
      this.query = ''
      this.$refs.inputSearch.value = ''
    },
  },
}
</script>

<style scoped>
.icon {
  font-family: 'ktquez' !important;
  position: relative;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  letter-spacing: 0;
  font-feature-settings: 'liga';
  font-variant-ligatures: discretionary-ligatures;
}

.search__icon {
  float: right;
  padding: 10px;
  cursor: pointer;
}

.search-box {
  position: absolute;
  top: 84px;
  right: 40px;
  z-index: 10;
  width: 88vw;
  max-width: 400px;
  padding: 20px;
  padding-bottom: 40px;
  background-color: white;
  overflow: auto;
  border-radius: 0 0 10px 10px;
}

.search-box__input {
  opacity: 1;
  visibility: visible;
}

.reset-input {
  position: relative;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #343434;
  font-family: inherit;
  font-size: 1.625rem;
  outline: none;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
}
</style>