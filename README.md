"# gulp" 

www.gulpjs.com.cn

插件： https://gulpjs.com/plugins

插件：https://www.npmjs.com/

* Gulp 介绍
  * 中文主页：http://www.gulpjs.com.cn/
  * gulp 是与 grunt 类似的 **前端项目构建** 工具，也是基于 Nodejs 的自动 **任务运行器**
  * 能自动地完成 javascript/coffee/sass/less/html/image/css 等文件的合并、压缩、检查、监听文件变化、浏览器自动刷新、测试等任务
  * gulp 更高效（异步多任务），更易于使用，插件高质量
  * 安装 nodejs，查看版本：node -v
  * 创建一个简单的 gulp_test

  ```
  /- dist
  /- src
    /- js
    /- css
    /- less
  /- index.html
  /- gulpfile.js ------- gulp 配置文件
  /- package.json
    {
      "name": "gulp_test",
      "version": "1.0.0"
    }
  ```

* 安装 gulp:
  * 全局安装 gulp
    ```
    npm install gulp -g
    ```
  * 局部安装 gulp
    ```
    npm install gulp --save-dev
    ```
  * 配置编码：gulpfile.js
    ```
    // 引入 gulp 
    ```