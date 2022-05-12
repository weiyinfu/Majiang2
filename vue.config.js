const path = require("path");
module.exports = {
    publicPath: "./",
    configureWebpack: {
        resolve: {extensions: [".ts", ".tsx", ".js", ".json"]},
        module: {
            rules: [
                {test: /\.ts$/, loader: "ts-loader"},
                {test: /\.md$/, loader: "markdown-loader"},
                {
                    test: /\.worker\.js$/, //以.worker.js结尾的文件将被worker-loader加载
                    loader: 'worker-loader',
                    options: {
                        filename: "[name][hash].worker.js",
                    }
                },
                {
                    test: /\.worker\.ts$/, //以.worker.js结尾的文件将被worker-loader加载
                    use: [
                        {
                            loader: 'worker-loader',
                            options: {
                                filename: "[name][hash].worker.js",
                            }
                        }, {
                            loader: "ts-loader",
                        },
                    ]
                },
            ],
        },
        resolveLoader: {
            modules: [
                path.resolve(__dirname),
            ]
        }
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7788',
                ws: true,
                changeOrigin: true
            },
        }
    }
}