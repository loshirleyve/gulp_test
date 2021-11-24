// babel
/*
 * @Author: liuli
 * @Date: 2021-11-24 08:17:03
 * @LastEditTime: 2021-11-24 08:35:32
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /gulp_learn/gulpfile.js
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')

// 注册任务
// gulp.task('', function() {
// // 配置任务的操作
// })

// 注册合并压缩 js 的任务
gulp.task('js', function() {
  return gulp.src('src/js/*.js') // 找到目标原文件，将数据读取到 gulp 的内存中
      .pipe(concat('built.js')) // 合并到临时文件
      .pipe(gulp.dest('dist/js')) // 生成到目标文件夹
      .pipe(rename({ suffix: '.min' })) // 重命名
})
// 注册默认任务
gulp.task('default', [''])