module.exports = {
  // ビルド情報の設定
  devtool: 'inline-source-map', // ソースマップ
  entry: './src/app.js', // エントリーファイル 
  output: {
    path: __dirname + '/public', // 出力ディレクトリ
    filename: 'bundle.js' // 出力ファイル
  },
  // 自動更新の設定
  watchOptions: {
    ignored: /node_modules/
  },
  // dev serverの設定
  devServer: {
    contentBase: __dirname + '/public',
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { url: false }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: ['@babel/plugin-syntax-jsx'],
          }
        }
      },
    ]
  },
};
