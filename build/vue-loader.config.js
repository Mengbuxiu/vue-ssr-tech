module.exports = (isDev) => {
    return {
        preserveWhiteSpace: true,
        // 单独打包css
        extractCss: !isDev,
        cssModules:{
            // 生成独一无二的css
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
            camelCase: true
        },
        // loaders 自定义loader 可以用来写文档
        // preLoader:{}
        // postLoader:{}

    }
};
