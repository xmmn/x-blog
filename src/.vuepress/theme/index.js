
module.exports = {
    base: '/',
    title: ``,
    evergreen: true,  // For modern browsers
    serviceWorker: true,
    chainWebpack: (config, isServer) => {
        if (!isServer) {
            if (process.env.NODE_ENV === 'production') {
                config
                    .output
                    .publicPath('/x-blog/')
            }
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