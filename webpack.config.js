module.exports = {
    entry: [
        "@babel/polyfill", 
        "./src/main.js"
    ],
    output: {
        path: __dirname + "/public/",
        filename: "./bundle.js"
    },
    devServer: {
        contentBase: __dirname + "/public/",
        port: 9001,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ],
    },
}