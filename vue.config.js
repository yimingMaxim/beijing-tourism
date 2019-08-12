const BASE_PATH = 'http://192.168.55.7';
// const BASE_PATH = 'http://192.168.13.176';

module.exports = {
  publicPath: './',
  devServer: {
    port: 8088,
    proxy: {
      '/auth': {
        target: BASE_PATH
      },
      '/message': {
        target: BASE_PATH
      },
      '/statistic': {
        target: BASE_PATH
      },
      '/product': {
        target: BASE_PATH
      },
      '/search': {
        target: BASE_PATH
      }
    }
  },
  productionSourceMap: false
};