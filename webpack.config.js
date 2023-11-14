const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  //input
  entry: './src/theme.js',
  // entry: {
  //   'bundle': './src/theme.js'
  // },

  //output
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'preact-components.js',
  },

  //transformations
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-env'],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }]
          ]
        }
      }
    ]
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        // Copy snippet components to snippets directory
        // {
        //   from: path
        //     .resolve(__dirname, 'components/**/snippet.*.liquid')
        //     .replaceAll('\\', '/'),
        //   to({ absoluteFilename }) {
        //     const p = `snippets/${path.basename(absoluteFilename, '.liquid').split('.')[1]
        //       }.liquid`;
        //     return path.resolve(__dirname, p);
        //   },
        // },
        // Copy section components to sections directory
        {
          from: path
            .resolve(__dirname, 'components/**/section.*.liquid')
            .replaceAll('\\', '/'),
          to({ absoluteFilename }) {
            const p = `sections/${path.basename(absoluteFilename, '.liquid').split('.')[1]
              }.liquid`;
            return path.resolve(__dirname, p);
          },
        },
        // Copy fonts to assets directory
        // {
        //   from: path
        //     .resolve(__dirname, 'fonts/**/*.(woff|woff2)')
        //     .replaceAll('\\', '/'),
        //   to({ absoluteFilename }) {
        //     const p = `assets/${path.basename(absoluteFilename)}`;
        //     return path.resolve(__dirname, p);
        //   },
        // },
        // Copy assets to assets directory
        // {
        //   from: path
        //     .resolve(__dirname, 'components/**/asset.*.*')
        //     .replaceAll('\\', '/'),
        //   to({ absoluteFilename }) {
        //     const p = `assets/${path.basename(absoluteFilename).split('asset.')[1]}`;
        //     return path.resolve(__dirname, p);
        //   },
        // },
      ],
    }),
  ],

  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat',
    }
  },

  //sourcemaps
  devtool: 'source-map'
}