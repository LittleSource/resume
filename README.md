# 这是一份由React开发的简历
![OSCS](https://www.oscs1024.com/platform/badge/LittleSource/resume-react.svg)
![LICENSE](https://img.shields.io/badge/LICENSE-GNU%20General%20Public-green)

## 技术栈 react+ts+vite

## 启动方式

```shell
# 安装依赖
yarn
# 启动服务
yarn dev 
```

## 主题修改

修改根目录下的tailwind.config.js配置文件

```js
// tailwind.config.js
module.exports = {
    // ...
    theme: {
        colors: {
            blue:{
                100:'#01aaed',// 顶部背景色
                200:'#17bbff',// 标题下边框颜色
                900:'#01a3e3' // 名字下边框颜色
            },
            // ...
        },
        // ...
    }
    // ...
}
```

![简历](https://raw.githubusercontent.com/LittleSource/resume-react/main/resume.png)
