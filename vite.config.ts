import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import presetWind from '@unocss/preset-wind';
import UnocssIcons from '@unocss/preset-icons';
import theme from './theme.js';
const srcPath = resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [
        presetWind(),
        UnocssIcons({
          // 其他选项
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block',
          },
        }),
      ],
      theme,
    }),
  ],
  resolve: {
    alias: {
      '@/': `${srcPath}/`,
    },
  },
  server: {
    host: '0.0.0.0',
  },
});
