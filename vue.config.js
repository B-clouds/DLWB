module.exports = {
    publicPath: './',
    lintOnSave: false,
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                // hhhhh
                remUnit: 192
            })
    }
}