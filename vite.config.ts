import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "homepage",
      remotes: {
        HeaderComponent: "http://localhost:5172/assets/HeaderComponent.js",
        FooterComponent: "http://localhost:5002/assets/FooterComponent.js",
      },
      shared: ["react"],
    }),
    tsconfigPaths(),
  ],
  preview: {
    host: "localhost",
    port: 5173,
    strictPort: true,
  },

  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
