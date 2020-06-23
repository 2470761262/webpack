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
            loader: 'eslint-loader',
            options: {
              rules: {
                semi: 'off'
              }
            }
          },
          /* config.module.rule('sorry').use('jsx') */
          {
            loader: 'jsx-loader'
          }
        ]
      }
    ]
  }
};
