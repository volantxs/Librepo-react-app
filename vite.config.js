import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "public/index.html",
  },
  publicDir: "./public",
  build: {
    outDir: "./public"
  },
  resolve: {
    alias: { "./": path.resolve(process.cwd(), "./") }
  },
});