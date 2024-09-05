import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), qrcode()],
  server: {
    port: 3000,
    proxy: {
      '/stream': {
        target: 'http://80.90.189.82',
        changeOrigin: true,
        secure: false,
      },
      '/upload': {
        target: 'http://80.90.189.82',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: './build',
  },
});
