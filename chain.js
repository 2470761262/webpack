module.exports = {
  module: {
    rules: [
      /* config.module.rule('sorryx') */
      {
        use: [
          /* config.module.rule('sorryx').use('jsx') */
          {
            loader: 'jsx-loader'
          }
        ]
      }
    ]
  }
};
