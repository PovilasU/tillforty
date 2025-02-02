import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    logLevel: "silent",
    loader: "tsx",
    include: [/src\/.*\.[tj]sx?$/], // ✅ Ensure Vite treats `.tsx` and `.jsx` files correctly
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "mui-vendor": ["@mui/material", "@mui/icons-material"],
          "mui-x-vendor": ["@mui/x-date-pickers", "@mui/x-data-grid-pro"],
          "react-router-vendor": ["react-router-dom"],
          // Add other libraries or modules you want to split into separate chunks
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the chunk size warning limit if needed
  },
});
