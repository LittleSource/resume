# 这是一份由React开发的简历
![OSCS](https://www.oscs1024.com/platform/badge/LittleSource/resume-react.svg)
![LICENSE](https://img.shields.io/badge/LICENSE-GNU%20General%20Public-green)

## 技术栈 react+ts+vite

> [在线体验](https://resume.52ym.vip/)

<hr>

## 启动方式

```shell
# 安装依赖
yarn
# 启动服务
yarn dev 
```
## 转换为PDF

在浏览器 > 按Ctrl/command + P > 打印 > 目标另存为PDF > 更多设置无边距 > 即可导出

## 主题修改

修改根目录下的vite.config.js配置文件

```js
// vite.config.js
export default defineConfig({
  plugins: [
    // ...
    theme: {
        colors: {
            blue:{
                100:'#01aaed',// 顶部背景色
                200:'#17bbff',// 标题下划线颜色
                900:'#01a3e3' // 姓名下划线颜色
            },
            // ...
        },
        // ...
    }
    // ...
  ]
}
```

## 预览图

![简历](https://raw.githubusercontent.com/LittleSource/resume-react/main/resume.png)
