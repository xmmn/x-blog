

export default ({ Vue, siteData }) => {
    Vue.prototype.goto = function (path) {
        return siteData.base === '/' ? path : siteData.base.substr(0, siteData.base.length - 1) + path
    }
}
