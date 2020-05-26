import * as path from 'path';
import HTMLPlugin from 'html-webpack-plugin';
import * as webpack from 'webpack';
import FaviconsPlugin from 'favicons-webpack-plugin';
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

const config: webpack.Configuration = {
    context: path.resolve(__dirname, './dev'),
    entry: './index.ts',
    output: {
        filename: './index.js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new RobotstxtPlugin,
        new HTMLPlugin({
            template: './index.pug',
            filename: './index.html',
            title: 'Landing',
            inject: 'head',
            scriptLoading: 'defer',
            showErrors: true,
            styles: './index.css'
        }),
        new FaviconsPlugin({
            logo: './index.svg',
            inject: true,
            outputPath: './favicons',
            prefix: 'favicons/'
        }),
    ],
    mode: 'production',
    target: 'web',
    module: { 
        rules: [
        {
            test: /\.(sass|css)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: './[name].css'
                    }
                },
                'extract-loader',
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: (loader: any) => [
                        require('postcss-import')({ root: loader.resourcePath }),
                        require('postcss-preset-env'),
                        require('cssnano'),
                        require('autoprefixer')
                        ]
                    }
                },
                'resolve-url-loader',
                {   
                    loader: 'sass-loader',
                    options: {
                        implementation: require('node-sass'),
                        sourceMap: true,
                        sassOptions: {
                            outputStyle: 'compressed',
                          },
                    }
                }
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            loader: 'file-loader',
            options: {name: './assets/[name].[ext]'}
        },
        {
            test: /\.(ttf|otf)$/i,
            loader: 'file-loader',
            options: {
                name: './fonts/[name].[ext]'
            }

        },
        {
            test: /\.pug$/,
            use: [
                {
                    loader: 'pug-loader',
                    options: {
                        doctype: 'html',
                    }
                }
            ]
        },
        {
            test: /\.tsx?$/,
            loader: 'ts-loader'
        },
    ]}
}

export default config;
