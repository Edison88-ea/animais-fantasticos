module.exports = {
  mode: "production", // ou 'development'
  entry: "./js/script.js",
  output: {
    filename: "main.js",
    path: __dirname, // ou um caminho específico
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /nome_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
