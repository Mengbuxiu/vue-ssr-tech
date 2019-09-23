//引入webpack
const webpack = require("webpack");

// 非javascript代码的静态文件单独打包
const ExtractPlugin = require("extract-text-webpack-plugin");

// js基本路径
const path = require("path");

const HTMLPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";

// 编译后的代码都在bundle.js中
let config = {
    target: "web",
    // __dirname 文件所在的目录，即根目录
    // entry 入口
    entry: path.join(__dirname, "src/index.js"),
    output: {
        filename: "bundle.[hash:8].js",
        path: path.join(__dirname, "dist")
    },
    module: {
        // -loader 预处理器
        rules: [
            {
                // test 检测文件类型
                test: /\.vue$/,
                // loader 为webpack处理 .vue 的文件类型
                loader: "vue-loader"
            },
            {
                // test 检测文件类型
                test: /\.jsx$/,
                // loader 为webpack处理 .vue 的文件类型
                loader: "babel-loader"
            },
            // 未使用，只用了stylus
            // {
            //     // test 检测文件类型
            //     test: /\.css$/,
            //     // 把css写入到js
            //     use: [
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },

            {
                test: /\.(gif|jpg|jpeg|png|svg)/,
                use: [{
                    // url-loader 把图片转为base64代码写入到js，而不用生成一个新的文件
                    loader: "url-loader",
                    options: {
                        // 图片大小检测，估计是kb
                        limit: 1024,
                        // 使用原名字, - zl 为自定义名称
                        name: "[name]-zl.[ext]"
                    }
                }]
            }
        ]
    },
    plugins: [
        // 根据开发环境打包
        new webpack.DefinePlugin({
            "process.env": {
                // '"字符串"'
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
};

if (isDev) {
    config.module.push({
        test: /\.styl/,
        use: [
            // 各自处理各自范围的代码
            // stylus-loader(处理style成css，扔给css-loader) -> css-loader -> style-loader
            "style-loader",
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
    });
    // 代码映射
    config.devtool = "#cheatp-module-eval-source-map";
    config.devServer = {
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
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
} else {
    config.entry = {
        app: path.join(__dirname, "src/index.js"),
        vendor: ['vue']
    };
    // chunkhash 单独打包时必须要用的生成hash的方式，为每个文件单独生成hash
    config.output.filename = '[name].[chunkhash:8].js';
    // 开发环境静态样式文件单独打包
    config.module.rules.push({
        test:/\.styl/,
        use: ExtractPlugin.extract({
            fallback: 'style-loader',
            use:[
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

    });

    config.plugins.push(
        new ExtractPlugin('styles.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        })
    )
}

module.exports = config;
