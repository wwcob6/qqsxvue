module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/',
  devServer: {
    // path
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
