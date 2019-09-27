// js基本路径
const path = require("path");
const isDev = process.env.NODE_ENV === "development";
const createVueLoaderOptions = require("./vue-loader.config");
// 编译后的代码都在bundle.js中
let config = {
    target: "web",
    // __dirname 文件所在的目录，即根目录
    // entry 入口
    entry: path.join(__dirname, "../client/index.js"),
    output: {
        filename: "bundle.[hash:8].js",
        path: path.join(__dirname, "../dist")
    },
    module: {
        // -loader 预处理器
        rules: [
            {
                // test 检测文件类型
                test: /\.(vue|js|jsx)$/,
                // loader 为webpack处理 .vue 的文件类型
                loader: "eslint-loader",
                exclude: /node_modules/,
                // 对这些文件进行一次预处理（在loader之前）
                enforce: "pre"
            },
            {
                // test 检测文件类型
                test: /\.vue$/,
                // loader 为webpack处理 .vue 的文件类型
                loader: "vue-loader",
                options: createVueLoaderOptions(isDev)
            },
            {
                // test 检测文件类型
                test: /\.jsx$/,
                // loader 为webpack处理 .vue 的文件类型
                loader: "babel-loader"
            },
            {
                // test 检测文件类型
                test: /\.js$/,
                // loader 为webpack处理 .vue 的文件类型
                loader: "babel-loader",
                // node_modules 里的js已经被编译过，不需要 再被babel编译
                exclude: /node_modules/
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
                        // 静态资源文件生成的位置
                        name: "resource/[path][name]-[hash:8].[ext]"
                    }
                }]
            }
        ]
    }
};

module.exports = config;
