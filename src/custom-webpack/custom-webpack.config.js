module.exports = {
  module: {
    rules: [
      {
        test: /node_modules\/protractor/,
        use: 'null-loader'
      }
    ]
  },
  resolve: {
    alias: {
      protractor: false
    }
  }
};
