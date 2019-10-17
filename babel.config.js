module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ]
  // css: {
  //           loaderOptions: {
  //             css: {},
  //             postcss: {
  //               plugins: [
  //                require('postcss-px2rem')({
  //                  remUnit: 37.5
  //               })
  //             ]
  //           }
  //         }
  //     },
}
