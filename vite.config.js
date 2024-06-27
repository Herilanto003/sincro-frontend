import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { BACKEND_PROXY } from "./proxy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/districts": {
        target: BACKEND_PROXY,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/pays": {
        target: BACKEND_PROXY,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/regions": {
        target: BACKEND_PROXY,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/zones": {
        target: BACKEND_PROXY,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/clubs": {
        target: BACKEND_PROXY,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
