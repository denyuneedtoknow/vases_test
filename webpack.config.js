const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  // Determine if we are in development mode based on the npm lifecycle event
  const isDevelopment = argv.mode === "development";

  return {
    entry: "./js/game.js", // Path to the main .js file
    output: {
      path: path.resolve(__dirname, "dist"), // Output directory for the bundle
      filename: "bundle.js", // Output bundle file name
    },
    module: {
      rules: [
        {
          test: /\.js$/, // Apply this rule to JavaScript files
          exclude: /node_modules/, // Exclude the node_modules directory
          use: {
            loader: "babel-loader", // Use babel-loader to transpile JavaScript
            options: {
              presets: ["@babel/preset-env"], // Preset used for transpiling
            },
          },
        },
        {
          test: /\.css$/, // Apply this rule to CSS files
          use: ["style-loader", "css-loader"], // Use these loaders for CSS files
        },
        {
          test: /\.(png|svg|jpg|gif|wav|mp3)$/, // Apply this rule to image files
          use: ["file-loader"], // Use file-loader for these file types
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(), // Clean the dist folder before each build
      new HtmlWebpackPlugin({
        // Simplify creation of HTML files to serve your bundles
        title: "Phaser Game", // Title of the game to use in the generated HTML
        template: "index.html", // Path to HTML template
      }),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"), // Where to serve content from
      },
      compress: true, // Enable gzip compression
      port: 9000, // Port to run the server on
      open: true, // Open the browser after server had been started
      hot: true, // Enable webpack's Hot Module Replacement feature
    },
    devtool: isDevelopment ? "eval-source-map" : "source-map", // Source maps configuration
  };
};
