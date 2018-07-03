//
//  ┌──────────────────┐
//  │ DEFINE VARIABLES │
//  └──────────────────┘
//

const gulp = require('gulp'),
      plugins = require('gulp-load-plugins')();

//
//  ┌────────────────┐
//  │ DEFINE FOLDERS │
//  └────────────────┘
//

let paths = {
  styles: {
    src: '_sass/**/*.scss',
    dest: '_site/css/'
  },
  scripts: {
    site: {
      src: '_javascript/site/**.js',
      dest: '_site/js/'
    },
    sw: {
      src: '_javascript/service-worker.js',
      dest: '_site/'
    }
  }
};


function styles() {
  return gulp.src(paths.styles.src)
    .pipe(plugins.sass({ outputStyle: 'expanded' }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(plugins.rename('screen.min.css'))
    .pipe(plugins.sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest(paths.styles.dest));
};

function autoprefix() {
  return gulp.src(paths.styles.dest + 'screen.min.css')
    .pipe(plugins.autoprefixer({ browsers: ['last 2 versions','ie 8','ie 9','ie 10','iOS 7'], cascade: false }))
    .pipe(plugins.rename('screen.min.prefix.css'))    
    .pipe(gulp.dest(paths.styles.dest));
};

function site_scripts() {
  return gulp.src(paths.scripts.site.src)
    .pipe(plugins.concat('scripts.concat.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.scripts.site.dest));
}

function service_worker() {
  return gulp.src(paths.scripts.sw.src)
    .pipe(plugins.uglify())
    .pipe(plugins.rename('service-worker.js'))   
    .pipe(gulp.dest(paths.scripts.sw.dest));
}

function watch() {
  gulp.watch(paths.scripts.site.src, site_scripts);
  gulp.watch(paths.scripts.sw.src, service_worker);
  gulp.watch(paths.styles.src, gulp.series(styles, autoprefix));
};

let build = gulp.parallel(gulp.series(styles, autoprefix), gulp.series(site_scripts, service_worker), watch);

gulp.task(build);

gulp.task('default', build);
