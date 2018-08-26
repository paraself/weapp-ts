const gulp = require('gulp');
const ts = require('gulp-typescript');
const debug = require('gulp-debug')
const log = require('fancy-log')

const paths = {
  scripts: [
    'typings/index.d.ts',
    'src/**/*.ts',
  ],
  statics: [
    'src/**/*.js',
    'src/**/*.json',
    'src/**/*.wxml',
    'src/**/*.wxss',
    'src/**/*.png',
    'src/**/*.jpg',
    'src/**/*.jpeg',
    'src/**/*.svg',
  ],
};

gulp.task('compile', () => {
  const tsProject = ts.createProject('tsconfig.json')
  gulp
    .src(paths.scripts)
    // .pipe(debug({ title: 'Compiling', showCount: false }))
    .pipe(tsProject())
    .pipe(gulp.dest('dist'))
});

gulp.task('copyStatic', () => {
  gulp
    .src(paths.statics)
    // .pipe(debug({ title: 'Copying', showCount: false }))
    .pipe(gulp.dest('dist'))
});

gulp.task('once', () => {
  gulp.run('copyStatic', 'compile')
})

gulp.task('watch', ['copyStatic', 'compile'], () => {
  gulp.watch('gulpfile.js', ['copyStatic', 'compile'])
  gulp.watch('package.json', ['copyStatic', 'compile'])
  let watchStatics = gulp.watch(paths.statics, ['copyStatic'])
  watchStatics.on('change', function (path, stats) {
    // console.log('File ' + path + ' was changed', stats)
    log.warn('========================================')
    log(path.type, path.path)
  })
  let watchScripts = gulp.watch(paths.scripts, ['compile'])
  watchScripts.on('change', function(path, stats) {
    // console.log('File ' + path + ' was changed', stats)
    log.warn('========================================')
    log(path.type, path.path)
  })
})

