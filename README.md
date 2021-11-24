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
    // 引入 gulp 模块
    var gulp = require('gulp')
    // 定义默认任务
    gulp.task('任务名', function() {
      // 将你的任务的代码放在这
    })
    gulp.task('default', ['任务']) // 异步执行
    ```
  * 构建命令 gulp
    ```
    gulp
    ```
  * 使用 gulp 插件
    * 相关插件：
      * gulp-concat: 合并文件（js/css）
      * gulp-uglify: 压缩 js 文件
      * gulp-rename: 文件重命名
      * gulp-less： 编译 less
      * gulp-clean-css: 压缩 css
      * gulp-livereload: 实时自动编译刷新
    * 重要 API
      * gulp.src(filePath/pathArr):
        * 指向指定文件的所有文件，返回文件流对象
        * 用于读取文件
      * gulp.dest(dirPath/pathArr): 
        * 指向指定的所有文件夹
        * 用于向文件夹中输出文件
      * gulp.task(name, [deps], fn)
        * 定义一个任务
      * gulp.watch
        * 监听文件的变化
    * 处理 js
      * 创建 js 文件
        * src/js/test1.js
          ```
          (function(){
            function add(num1, num2) {
              var num3 = 0;
              num1 = num2 + num3
              return num1 + num2
            }
            console.log(add(10, 30))
          })()
          ```
        * src/js/test2.js
          ```
          (function() {
            var arr = [1, 2, 3, 4, 5].map(function(item, index) {
              return item + 10
            })

            console.log(arr)
          })()
          ```
        * 下载插件
          ```
          npm install gulp-concat gulp-uglify gulp-rename --save-dev
          ```
        * 配置编码
          ```
          var concat = require('gulp-concat')
          var uglify = require('gulp-uglify')
          var rename = require('gulp-rename')

          gulp.task('minifyjs', function() {
            return gulp.src('src/js/*.js') // 操作的源文件
                .pipe(concat('built.js')) // 合并到临时文件
                .pipe(gulp.dest('dist/js')) // 生成到目标文件夹
                .pipe(rename({ suffix: '.min' })) // 重命名

          })
          ```