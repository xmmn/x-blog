<template>
  <footer class="footer">
    <div class="footer-box1">
      <svg
        class="footer-box__shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1366 161"
      >
        <path
          d="M-11.925-4809v-154.746c40.454,19.75,273.683,130.936,420.544,142.612,161.25,12.821,339.978-42.709,521.543-86.3,169.82-40.769,395.43,29.2,423.912,38.429v60Z"
          transform="translate(11.926 4970)"
        />
      </svg>
    </div>
    <div class="footer-box2">
      <svg
        class="footer-box__shape"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 1366 246"
      >
        <path
          d="M-1505.5-4725.5v-238.1c8.149-3.133,18.138-5.059,29.672-5.9h30.954c201.21,11.667,696.6,224.535,855.572,236.458,205.129,15.385,287.179-164.1,432.047-175.625a42.381,42.381,0,0,1,16.756,1.857V-4725.5Z"
          transform="translate(1506 4971)"
        />
      </svg>
      <ul class="footer-social__list">
        <li
          class="footer-social__item"
          v-for="(network, index) in social"
          :key="`${network.name}-${index}`"
        >
          <a
            :href="network.link"
            target="_blank"
            rel="noopener external"
            title="Follow us on Facebook"
          >
            <span class="icon footer-social__icon">{{ network.name }}</span>
          </a>
        </li>
      </ul>
    </div>

    <section class="footer-box3">
      <div class="row">
        <div class="column sm-50 footer-card">
          <lazy-load>
            <card-author />
          </lazy-load>
        </div>
        <div class="column sm-50 footer-nav"></div>
      </div>
      <span class="shapes shapes--circle" style="left: 3%; top: -20%"></span>
      <span class="shapes shapes--primary shapes--color3" style="left: 30%; top: -15%"></span>
      <span class="shapes shapes--primary" style="left: 13%; top: -80%; transform: rotate(45deg)"></span>
      <span class="shapes shapes--circle shapes--color4" style="left: 40%; top: 200px"></span>
      <span class="shapes shapes--primary" style="left: 15%; bottom: 10%; transform: rotate(75deg)"></span>
      <span class="shapes shapes--circle shapes--color3" style="right: 50%; top: 30%"></span>
      <span class="shapes shapes--primary" style="right: 20%; top: -100%"></span>
      <span class="shapes shapes--circle" style="right: 10%; top: -20%"></span>
      <span class="shapes shapes--color4" style="right: 35%; top: -20%; transform: rotate(45deg)"></span>
      <span class="shapes shapes--circle" style="left: 40%; top: -50%"></span>
      <span class="shapes shapes--color3" style="right: 30%; top: 20%"></span>
      <span class="shapes shapes--circle shapes--primary" style="right: 30%; bottom: 20%"></span>
    </section>
  </footer>
</template>

<script>
import LazyLoad from '../lazy/load.vue'
import CardAuthor from '../CardAuthor.vue'
export default {
  name: 'Footer',
  components: { LazyLoad, CardAuthor },
  data() {
    return {
      social: [
        {
          name: 'github',
          link: 'https://github.com/xmmn',
        },
      ],
    }
  },
}
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
}

.footer-box__shape {
  position: absolute;
  bottom: 0;
  left: 0;
}

.footer-box1 {
  position: relative;
  height: 249px;
  top: 4px;
}

.footer-box1 .footer-box__shape {
  fill: #263647;
}

.footer-box2 {
  position: relative;
  height: 250px;
  background-color: #263647;
  bottom: -2px;
}

.footer-box2 .footer-box__shape {
  fill: #35495e;
}

.footer-box3 {
  position: relative;
  background-color: #263647;
  padding: 50px 0;
}
</style>

<style scoped>
.footer-social__list {
  display: inline-block;
  margin-top: 8%;
  margin-left: 30px;
  z-index: 2;
  position: relative;
}

.footer-social__item {
  display: inline;
  margin-right: 16px;
  color: white;
}
.footer-social__icon {
  color: white;
  font-size: 2rem;
}

.shapes {
  position: absolute;
  width: 20px;
  height: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: white;
  z-index: 1;
}

.shapes--circle {
  border-radius: 50%;
}

.shapes--primary {
  border-color: #41b883;
}

.shapes--color3 {
  border-color: #900c3f;
}

.shapes--color4 {
  border-color: #581845;
}
</style>

<style scoped>
.row {
  display: flex;
}

.column {
  flex: 0 0 100%;
  padding-left: 0.9375rem;
  padding-right: 0.9375rem;
}

.sm-50 {
  flex: 1;
}

.footer-card {
  position: relative;
}
</style>