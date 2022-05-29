module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/bakkerij-adriaans/' : '/',
    devServer: {
      disableHostCheck: true
    }
}