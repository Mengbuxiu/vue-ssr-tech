const autoprefixer = require("autoprefixer");


module.exports = {
    plugins: [
        // css 后处理 比如 各个浏览器的差异 -chrome 等等
        autoprefixer()
    ]
};
