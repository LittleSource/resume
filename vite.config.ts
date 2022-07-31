import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
const srcPath = resolve(__dirname, 'src');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': `${srcPath}/`,
    },
  },
  server: {
    host: '0.0.0.0',
  },
  css: {
    preprocessorOptions: {
      less: {},
    },
    postcss: {
      plugins: [
        require('postcss-px-to-viewport')({
          unitToConvert: 'px', // 要转化的单位
          viewportWidth: 1920, // UI设计稿的宽度
          unitPrecision: 3, // 转换后的精度，即小数点位数
          propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          minPixelValue: 1, // 小于或等于1px不转换
          mediaQuery: true, // 允许在媒体查询中转换
        }),
      ],
    },
  },
});
