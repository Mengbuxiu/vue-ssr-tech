//引入webpack
const webpack = require("webpack");
// 非javascript代码的静态文件单独打包
const ExtractPlugin = require("extract-text-webpack-plugin");
// js基本路径
const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const isDev = process.env.NODE_ENV === "development";
const defaultPlugins = [
    // 根据开发环境打包
    new webpack.DefinePlugin({
        "process.env": {
            // '"字符串"'
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new HTMLPlugin()
]

const devServer = {
    port: 8000,
    // 使用ip访问
    host: "0.0.0.0",
    // 将错误显示到网页上
    overlay: {
        error: true
    },
    // 自动打开浏览器
    open: true,
    // historyApiFallback
    // 热更新，页面数据不会丢掉
    hot: true

};
let config;
if (isDev) {
    config = merge(baseConfig, {
        devServer,
        // 代码映射
        devtool: "#cheatp-module-eval-source-map",
        module: {
            rules: [
                {
                    test: /\.styl/,
                    use: [
                        // 各自处理各自范围的代码
                        // stylus-loader(处理style成css，扔给css-loader) -> css-loader -> style-loader
                        "vue-style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        // 写起来方便
                        "stylus-loader"
                    ]
                }
            ]
        },
        plugins: defaultPlugins.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    });

} else {
    config = merge(baseConfig, {
        entry: {
            app: path.join(__dirname, "../client/index.js"),
            vendor: ['vue']
        },
        output:{
            // chunkhash 单独打包时必须要用的生成hash的方式，为每个文件单独生成hash
            filename: '[name].[chunkhash:8].js'
        },
        module: {
            rules: [
                // 开发环境静态样式文件单独打包
                {
                    test: /\.styl/,
                    use: ExtractPlugin.extract({
                        fallback: 'vue-style-loader',
                        use: [
                            // 各自处理各自范围的代码
                            // stylus-loader(处理style成css，扔给css-loader) -> css-loader -> style-loader
                            "css-loader",
                            {
                                loader: "postcss-loader",
                                options: {
                                    sourceMap: true
                                }
                            },
                            // 写起来方便
                            "stylus-loader"
                        ]
                    })

                }
            ]
        },
        plugins: defaultPlugins.concat([
            new ExtractPlugin('styles.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime'
            })
        ])
    });

}

module.exports = config;
