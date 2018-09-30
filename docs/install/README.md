# 安装

# gulu 一个VUE UI组件
[![Build Status](https://travis-ci.org/From-WH/gulu-demo.svg?branch=master)](https://travis-ci.org/From-WH/gulu-demo)
### 作者：From

## 介绍
这是我在学习Vue过程中制作的一个UI框架，希望对你有用。

## 开始
    1.安装
    `npm i --save chelun-gungun`
    
    2.添加css样式
    使用本框架前，请在CSS中开启border-box
    IE8之前不支持此样式
    ```
      *，*::after,*::before{
        box-sizing: border-box;
       }
    ```
    当然，你还需要这设置一下默认的颜色：
    ```
        html {
          --button-height: 32px;
          --font-size: 14px;
          --button-bg: white;
          --button-active-bg: #eee;
          --border-radius: 4px;
          --color: #333;
          --border-color: #999;
          --border-color-hover: #666;
        }
    ```
    
    本组件需要用parcel进行打包处理，需要您自行安装
    在命令行运行 npx parcel index.html
    
    3.引入
    ```
      import {Button, ButtonGroup, Icon} from 'chelun-gungun'
      import 'chelun-gungun/dist/index.css'
    
      export default {
        name: 'app',
        components: {
          HelloWorld,
          'g-button': Button
        }
      }
    ```
    

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码