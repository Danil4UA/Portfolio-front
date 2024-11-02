import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow access from external hosts
    port: 4173, // You can specify any available port
    strictPort: true, // Fail if the port is already in use
  },
});