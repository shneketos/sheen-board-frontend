/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";

export default defineConfig({
    plugins: [react(), tsconfigPaths(), svgr()],
    server: { port: 3000 },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: ["./setup.ts"],
    },
});
