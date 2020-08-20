module.exports = {
    base: '/',
    title: `MY TITLE`,
    ga: `MY TRACKING CODE GOOGLE ANALYTICS`,
    evergreen: true,  // For modern browsers
    serviceWorker: true,
    chainWebpack: (config, isServer) => {
        if (!isServer) {
            config
                .output
                .publicPath('/')
        }
    },
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            // use less
            return {
                module: {
                    rules: [
                        {
                            test: /\.less$/,
                            use: [
                                {
                                    loader: 'style-loader',
                                },
                                {
                                    loader: 'css-loader',
                                },
                                {
                                    loader: 'less-loader',
                                    options: {
                                        lessOptions: {
                                            strictMath: true,
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
            }
        }
    }
}