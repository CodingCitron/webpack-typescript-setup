const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env, args) => {
    const isProd = args.mode === 'production' ? true : false

    return {
        // devtool: isProd? false : 'eval-source-map',
        entry: './src/index.ts', // 최상위 자바스크립트 파일
        resolve: {
            extensions: ['.ts', '.js']
        },
        module: { // 웹팩은 모든 파을 모듈로 관리한다.
            rules: [
                {
                    test: /\.ts$/, // 로딩할 파일을 지정
                    use: 'ts-loader', // 적용할 로더
                    include: [path.resolve(__dirname, 'src')] // 이 경로에 적용
                },
                // { 
                //     test: /\.css$/,
                //     use: ['style-loader', 'css-loader'] // use 배열은 뒤에서부터 적용
                // }
                {
                    test: /\.(sa|sc|c)ss$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                },
                // file-loader setting
                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    use: ['file-loader']
                }
            ]
        },
        output: { // 번들링된 결과물의 옵션
            filename: 'bundle.js', // 파일 이름
            path: path.resolve(__dirname, 'dist') // 파일 경로
        },
        devServer: {
            static: {
                directory: path.join(__dirname, 'pulbic')
            },
            compress: true,
            port: 9000
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'public/index.html'
            }),
            new MiniCssExtractPlugin(),
        ]  
    }
}