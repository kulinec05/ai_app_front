import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
import { qrcode } from 'vite-plugin-qrcode';

export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin(), qrcode()],
  server: {
    port: 3000,
    host: '127.0.0.1',
  },
  build: {
    outDir: './build',
  },
});
