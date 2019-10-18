// const BASE_PATH = 'http://192.168.0.113:7891';
const BASE_PATH = 'http://192.168.54.12:7891';
// const BASE_PATH = '192.168.202.198:7891';

module.exports = {
  publicPath: './',
  devServer: {
    port: 7891,
    proxy: {
      '/user': {
        target: BASE_PATH
      },
      '/tour': {
        target: BASE_PATH
      },
      '/car': {
        target: BASE_PATH
      },
      '/order': {
        target: BASE_PATH
      },
      '/business': {
        target: BASE_PATH
      },
      '/image': {
        target: BASE_PATH
      },
      '/price': {
        target: BASE_PATH
      },
      '/downloadImg': {
        target: BASE_PATH
      }
    }
  },
  productionSourceMap: false
};