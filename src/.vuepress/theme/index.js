module.exports = {
    chainWebpack: (config, isServer) => {
        if (!isServer) {
            config.output
                .publicPath('./')
        }
    }
}