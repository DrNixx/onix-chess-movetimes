const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map', 

    entry: {
        app: ["./src/index.ts"],
        tests: ["./src/test/index.ts"]
    },

    output: {
        libraryTarget: "umd",
        library: "onix",
        path: path.join(__dirname, "public/js"),
        publicPath: 'js/',
        chunkFilename: "chess-movetimes.[name].js",
        filename: "chess-movetimes.[name].js"
    },

    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            //chunks: 'all',
            //name: false,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                }
            }
        }
   },

    plugins: [
        new CleanWebpackPlugin(['public/js'])
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    }
};