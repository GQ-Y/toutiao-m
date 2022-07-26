module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 把px单位换算成rem单位 同时判断是否是vant组件的样式
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}
