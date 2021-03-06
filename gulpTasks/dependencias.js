const gulp = require('gulp');

const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');

const concat = require('gulp-concat');


gulp.task('dependencias', ['dependencias.js', 'dependencias.css', 'dependencias.fonts'])


gulp.task('dependencias.css', function(){
    return gulp.src([
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.scss',
        'node_modules/prismjs/themes/prism.css',
        'node_modules/prismjs/themes/prism-okaidia.css',
        'node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.css',
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(uglifycss())
    .pipe(concat('dependencias.min.css'))
    .pipe(gulp.dest('public/assets/css'))
})


gulp.task('dependencias.js', function(){
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/@uirouter/angularjs/release/angular-ui-router.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-toastr/dist/angular-toastr.tpls.min.js',
        'node_modules/prismjs/prism.js',
        'node_modules/prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js',
        'node_modules/jquery/dist/jquery.min.js'
    ])
    .pipe(uglify())
    .pipe(concat('dependencias.min.js'))
    .pipe(gulp.dest('public/assets/js'))
    
})

gulp.task('dependencias.fonts', function(){
    return gulp.src([
    ])
    .pipe(gulp.dest('public/assets/fonts'))
})