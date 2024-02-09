export type BuildMode = "production" | "development";
export interface BuildPath {
  entry: string;
  build: string;
  html: string;
  src: string;
}
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPath;
  port: number;
  isDev: boolean;
}
export interface BuildEnv {
  mode: BuildMode;
  port: number;
}
