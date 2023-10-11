module.exports = {
  // ...其他配置项

  module: {
    rules: [
      // ...其他规则
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },

  // ...其他配置项
};
