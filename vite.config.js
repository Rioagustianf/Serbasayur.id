import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    loader: 'jsx',
  },
  optimizeDeps: {
    include: ["bootstrap"],
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
});
