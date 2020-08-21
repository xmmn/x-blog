
module.exports = {
  base: process.env.NODE_ENV === 'production' ? '/xmmn/' : '/',
  title: `MY ITLIFE`,
  theme: './theme/index.js',
  themeConfig: {
    github: {
      name: 'xmmn',
      url: 'https://github.com/xmmn'
    },
    navs: [
      {
        name: '首页',
        icon: 'fa-home',
      },
      {
        name: '标签',
        icon: 'fa-tags',
      }
    ],
    banners: [
      1, 2, 3, 4, 5
    ]
  }
}
