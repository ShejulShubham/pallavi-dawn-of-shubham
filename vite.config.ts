import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Exposes the server on local network (e.g., 192.168.x.x:5173)
    port: 5173,
    open: true, // Automatically launches your default browser on start
  },
});