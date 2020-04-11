const path = require('path'); //utilizado o módulo nativo path do node para não ter que se preocupar com o endereço do caminho

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'), //caminho para o diretório com os arquivos públicos da aplicação
  }, //criado após a instalação do módulo yarn add webpack-dev-server -D
  module:{
    rules: [
      {
       test: /\.js$/,
       exclude: /node_modules/,
       use: {
         loader: 'babel-loader', //resumo, toda vez que for precisar de um arquivo .js e ele não estiver na pasta node modules, faça a conversão com o babel-loader
       } 
      },
      {
        test: /\.css$/, // converter todo arquivo que terminar com .css
        exclude: /node_modules/,
        use:[
          { loader: 'style-loader' }, //vai pegar o Css interpretado pelo css loader e vai injetar dentro do nosso html
          { loader: 'css-loader' }, //vai conseguir ler o arquivo css e conseguir interpretrar também as importações de há lá dentro, como imagens
        ]
      },
      {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader',
        }
      }
    ]
  }
}