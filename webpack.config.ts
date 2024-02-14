import { type Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/BuildWebpackConfig";
import { type BuildEnv, type BuildPath } from "./config/build/types/config";
import path from "path";

const customWebpackConfig = (env: BuildEnv): Configuration => {
    const paths: BuildPath = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
    };

    const MODE = env.mode || "development";
    const PORT = env.port || 3000;
    const config: Configuration = buildWebpackConfig({
        mode: MODE,
        paths,
        port: PORT,
        isDev: MODE === "development",
    });
    return config;
};

export default customWebpackConfig;
