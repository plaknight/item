module.exports = {
    css: {
        loaderOptions: {
          css: {},
          postcss: {
            plugins: [
              require('postcss-px2rem')({
                remUnit: 37.5
              })
            ]
          }
        }
    },
  devServer: {
    proxy: {
        '/api': {
            target: 'http://openapi.tuling123.com',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': ''
            }
        }
    }
}
}