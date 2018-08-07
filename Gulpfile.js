//
//  ┌───────────┐
//  │ VARIABLES │
//  └───────────┘
//

const gulp = require('gulp'),
      plugins = require('gulp-load-plugins')();

//
//  ┌─────────┐
//  │ FOLDERS │
//  └─────────┘
//

let paths = {
  data: {
    src: '_data/speaker-profiles.json',
    dest: '_site/js/'
  },  
  styles: {
    src: '_sass/**/*.scss',
    dest: '_site/css/'
  },
  scripts: {
    site: {
      polyfills: '_javascript/site/polyfills/**.js',
      vendor: '_javascript/site/vendor/**.js',
      src: '_javascript/site/**.js',
      dest: '_site/js/'
    },
    sw: {
      src: '_javascript/service-worker.js',
      dest: '_site/'
    }
  },
  images: {
    webp: '_site/img/**/*.{jpg,jpeg}',
    src: 'img/**/*.{png,gif,jpg,jpeg}',
    dest: '_site/img/'
  },
};

//
//  ┌───────────┐
//  │ FUNCTIONS │
//  └───────────┘
//

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
    .pipe(plugins.autoprefixer({ browsers: ['last 4 versions', 'ie 8', 'ie 9', 'ie 10', 'iOS 7'], cascade: false, grid: true }))
    .pipe(plugins.rename('screen.min.prefix.css'))    
    .pipe(gulp.dest(paths.styles.dest));
};

function vendor_polyfills() {
  return gulp.src(paths.scripts.site.polyfills)
    .pipe(plugins.concat('vendor.polyfills.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.scripts.site.dest));
}

function vendor_scripts() {
  return gulp.src(paths.scripts.site.vendor)
    .pipe(plugins.concat('vendor.concat.js'))
    .pipe(plugins.uglify())
    .pipe(gulp.dest(paths.scripts.site.dest));
}

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

function images_webp() {
  return gulp.src(paths.images.webp)
    .pipe(plugins.webp({ preset: 'photo' }))  
    .pipe(gulp.dest(paths.images.dest));
}

function image_process() {
  return gulp.src(paths.images.src)
    .pipe(plugins.imagemin({ progressive: true }))  
    .pipe(gulp.dest(paths.images.dest));
}

function copy_json() {
  return gulp.src(paths.data.src).pipe(gulp.dest(paths.data.dest));
}

function watch() {
  gulp.watch(paths.scripts.site.src, gulp.series(site_scripts, vendor_scripts, vendor_polyfills));
  gulp.watch(paths.scripts.sw.src, service_worker);
  gulp.watch(paths.styles.src, gulp.series(styles, autoprefix));
  gulp.watch(paths.images.src, gulp.series(image_process, images_webp));
};

let build = gulp.parallel(gulp.series(styles, autoprefix),
            gulp.series(vendor_scripts, vendor_polyfills, site_scripts, service_worker),
            gulp.series(image_process, images_webp), copy_json, watch);

gulp.task(build);

gulp.task('default', build);
