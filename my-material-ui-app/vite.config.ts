import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "tsx",
    include: [/src\/.*\.[tj]sx?$/], // ✅ Ensure Vite treats `.tsx` and `.jsx` files correctly
  },
});
