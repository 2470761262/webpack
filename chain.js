module.exports = {
  module: {
    rules: [
      /* config.module.rule('sorry') */
      {
        test: /\.js$/,
        enforce: 'pre',
        include: [
          'src'
        ],
        use: [
          /* config.module.rule('sorry').use('eslint') */
          {
            loader: 'gg-loader',
            options: {
              rules: {
                semi: 'off'
              }
            }
          }
        ]
      }
    ]
  }
};
