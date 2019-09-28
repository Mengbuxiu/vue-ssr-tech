//引入webpack
const webpack = require("webpack");
// js基本路径
const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.config.base");
const merge = require("webpack-merge");
const defaultPlugins = [
  // 根据开发环境打包
  new webpack.DefinePlugin({
    "process.env": {
      // '"字符串"'
      NODE_ENV: '"development"'
    }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const devServer = {
  port: 8080,
  // 使用ip访问
  host: "0.0.0.0",
  // 将错误显示到网页上
  overlay: {
    error: true
  },
  // 自动打开浏览器
  open: true,
  // historyApiFallback
  /*historyApiFallback: {
      index: '/dist/index.html'
  },*/
  // 热更新，页面数据不会丢掉
  hot: true

};

let config;

config = merge(baseConfig, {
  devServer,
  entry: path.join(__dirname, '../practice/index.js'),
  output: {
    filename: "bundle.[hash:8].js",
    path: path.join(__dirname, "../dist_practice")
  },
  // 代码映射
  devtool: "#cheatp-module-eval-source-map",
  resolve: {
    alias: {
      'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
    }
  },
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
module.exports = config;
