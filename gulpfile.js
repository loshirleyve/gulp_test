// babel
/*
 * @Author: liuli
 * @Date: 2021-11-24 08:17:03
 * @LastEditTime: 2021-11-24 13:54:01
 * @LastEditors: Please set LastEditors
 * @Description: 
 * @FilePath: /gulp_learn/gulpfile.js
 */
var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')
var rename = require('gulp-rename')
var less = require('gulp-less')
var cssClean = require('gulp-clean-css')
var htmlMin = require('gulp-htmlmin')
var livereload = require('gulp-livereload')
var connect = require('gulp-connect')
var open = require('open')


// 注册任务
// gulp.task('', function() {
// // 配置任务的操作
// })

// 注册合并压缩 js 的任务
gulp.task('js', function () {
  return gulp.src('src/js/*.js') // 找到目标原文件，将数据读取到 gulp 的内存中
    .pipe(concat('built.js')) // 合并到临时文件
    // .pipe(gulp.dest('dist/js')) // 生成到目标文件夹
    .pipe(uglify()) // 压缩文件
    .pipe(rename({ suffix: '.min' })) // 重命名
    .pipe(gulp.dest('dist/js'))
    .pipe(livereload()) // 实时刷新
})

// 注册转换 less 服务
gulp.task('less', function () {
  return gulp.src('src/less/*.less')
  .pipe(less()) // 编译 less 文件为 css 文件
  .pipe(gulp.dest('src/css/'))
  .pipe(livereload()) // 实时刷新
})

// 注册合并压缩 css 文件
gulp.task('css', ['less'], function () {
  return gulp.src('src/css/*.css')
  .pipe(concat('build.css'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(cssClean({ compatibility: 'ie8' }))
  .pipe(gulp.dest('dist/css/'))
  .pipe(livereload()) // 实时刷新
})

// 注册压缩 html 的任务
gulp.task('html', function () {
  return gulp.src('index.html')
    .pipe(htmlMin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'))
    .pipe(livereload()) // 实时刷新
})

// 注册默认任务
gulp.task('default', ['js', 'css', 'html'])

// 注册监测任务（半自动）
gulp.task('watch', ['default'], function () {
  // 开启监听
  livereload.listen()
  // 确认监听的目标以及绑定相应的任务
  gulp.watch('src/js/*.js', ['js'])
  gulp.watch(['src/css/*.css', 'src/less/*.less'], ['css'])
})

// 注册监视任务（全自动）
gulp.task('server', ['default', 'watch'], function () {
  // 配置服务器的选项
  connect.server({
    root: 'dist/',
    livereload: true,
    port: 5000
  })

  // open 可以自动打开指定的连接
  open('http://localhost:5000')
})