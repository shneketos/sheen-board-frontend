import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { type BuildOptions } from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins ({
    paths,
    mode,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isDev = mode === "development";
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            openAnalyzer: false,
        }),
    ];
    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
    }

    return plugins;
}
