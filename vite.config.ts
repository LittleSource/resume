import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import presetWind from '@unocss/preset-wind';
import UnocssIcons from '@unocss/preset-icons';
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
      theme: {
        colors: {
          blue: {
            100: '#01aaed',
            200: '#17bbff',
            900: '#01a3e3',
          },
          white: '#FFFFFF',
        },
        fontFamily: {
          title: [
            '"PingFang SC"',
            '"Microsoft YaHei"',
            '"Hiragino Sans GB W3"',
          ],
          body: [
            '"Helvetica Neue"',
            'Helvetica',
            '"PingFang SC"',
            '"Microsoft YaHei"',
            '"微软雅黑"',
            'Arial',
            'sans-serif',
          ],
        },
      },
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
  css: {
    // preprocessorOptions: {
    //   less: {},
    // },
    // postcss: {
    //   plugins: [require('tailwindcss')({}), require('autoprefixer')({})],
    // },
  },
});
