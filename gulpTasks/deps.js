const gulp = require('gulp')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const uglifycss = require('gulp-uglifycss')

gulp.task('deps', ['deps.js', 'deps.css', 'deps.fonts'])

gulp.task('deps.js', function () {
    gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'template-horizontal/assets/js/jquery-1.10.2.js',
        'template-horizontal/assets/js/bootstrap.js',
        'template-horizontal/assets/js/dataTables/jquery.dataTables.js',
        'template-horizontal/assets/js/dataTables/dataTables.bootstrap.js',
        'template-horizontal/assets/js/custom.js'
    ])
        .pipe(uglify())
        .pipe(concat('deps.min.js'))
        .pipe(gulp.dest('public/assets/js'))
})

gulp.task('deps.css', function () {
    gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
        'template-horizontal/assets/css/bootstrap.css',
        'template-horizontal/assets/css/font-awesome.css',
        'template-horizontal/assets/js/dataTables/dataTables.bootstrap.css',
        'template-horizontal/assets/css/style.css'
    ])
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('public/assets/css'))
})

gulp.task('deps.fonts', function () {
    gulp.src([
        'node_modules/font-awesome/fonts/*.*',
        'template-horizontal/assets/fonts/*.*'
    ])
        .pipe(gulp.dest('public/assets/fonts'))
})

