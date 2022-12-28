import path from "path";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
    target: 'web',
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: {
        main: './index.tsx',
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: './index.html',
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'assets', to: path.resolve(__dirname, 'dist/assets'), }
                ]
            }
        )
    ],
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".css", ".scss", ".sass"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader:"style-loader" },
                    { loader: "css-modules-typescript-loader"},
                    {
                        loader: "css-loader",
                        options: {
                            url: false,
                            modules: true
                        },
                    },
                    { loader:"resolve-url-loader" },
                    { loader:"sass-loader" },
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: "file-loader"
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                use: "file-loader"
            }
        ]
    }
}

export default config;