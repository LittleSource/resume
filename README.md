# 这是一份由React开发的简历

![OSCS](https://www.oscs1024.com/platform/badge/LittleSource/resume-react.svg)
![LICENSE](https://img.shields.io/badge/LICENSE-GNU%20General%20Public-green)

## 🪶Features

- 💥react+ts+vite赶时髦儿的技术栈

- 💪可转换为PDF

- 💦可自定义主题、字体

- 👁️响应式设计

## 👋预览

❤️‍🔥[在线体验](https://resume.52ym.vip/)

![简历](https://raw.githubusercontent.com/LittleSource/resume/main/resume.png)

## 🏃启动方式

```shell
# 如果没安装yarn，先安装
npm install yarn -g
# 安装依赖
yarn
# 启动服务
yarn dev 
```

## 转换为PDF

在浏览器 > 按`Ctrl/command + P` > 打印 > 目标另存为PDF > 更多设置`无边距` > 勾选`背景颜色` > 即可导出PDF

如果字数太多打印时变为两页多点，在更多设置里调整缩放即可。

## 主题修改

修改根目录下的theme.js配置文件

```js
// theme.js
colors: {
  blue:{
      100:'#01aaed', // 顶部背景色
      200:'#17bbff', // 标题下划线颜色
      900:'#01a3e3'  // 姓名下划线颜色
  },
// ...
}
// ...
```
