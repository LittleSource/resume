/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.tsx',
    './src/components/**/*.tsx'
  ],
  theme: {
    colors: {
      blue:'#01aaed'
    },
    fontFamily: {
      'title': ['"PingFang SC"', '"Microsoft YaHei"', '"Hiragino Sans GB W3"'],
      'body': ['"Helvetica Neue"', 'Helvetica', '"PingFang SC"', '"Microsoft YaHei"',
      '"微软雅黑"', 'Arial', 'sans-serif'],
     }
  },
  corePlugins: {
   container: false,
  }
}
