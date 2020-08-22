

export default ({ Vue, siteData }) => {
    Vue.prototype.goto = function (path) {
        return siteData.base === '/' ? path : siteData.base + path
    }
}
