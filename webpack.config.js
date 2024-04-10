const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    stats: {
        warnings: false,
    },
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
            {
                test: /\.css$/,
                loader: "css-loader",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
        }),
        new ModuleFederationPlugin({
            name: "ShellApp",
            filename: "dist/remoteEntry.js",
            remotes: {
                OrdersMicroApp:
                    "OrdersMicroApp@http://localhost:3001/dist/remoteEntry.js",
            },
            exposes: {
                "./App": "./src/App",
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: "^18.2.0",
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: "^18.2.0",
                },
                "@mui/material": {
                    singleton: true,
                    requiredVersion: "^5.15.15",
                },
                "@emotion/styled": {
                    singleton: true,
                    requiredVersion: "^11.11.5",
                },
                "@emotion/react": {
                    singleton: true,
                    requiredVersion: "^11.11.4",
                },
            },
        }),
    ],
    optimization: {
        minimize: false,
    },
};
