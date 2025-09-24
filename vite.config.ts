/// <reference types="vitest" />
import { defineConfig } from "vite";
import { configDefaults } from "vitest/config";
import * as path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/front-icbox-pj/",
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    outDir: "build",
  },
  test: {
    poolOptions: {
      threads: {
        minThreads: 1,
        maxThreads: 2,
        singleThread: false,
      },
    },
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    coverage: {
      provider: "istanbul",
      reporter: ["json", "lcov"],
      exclude: [
        ...configDefaults.exclude,
        "*.cjs",
        "coverage/**",
        "src/components/ui/**/*",
      ],
    },
  },
});
