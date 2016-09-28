import * as gulp from 'gulp';
import * as merge from 'merge-stream';
import * as changedInPlace from 'gulp-changed-in-place';
import * as project from '../aurelia.json';
import * as path from 'path';

export default function prepareFontAwesome() {

  let source = 'node_modules/font-awesome';

  let taskCss = gulp.src(`${source}/css/font-awesome.min.css`)
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(`${project.platform.output}/css`));

  let taskFonts = gulp.src(`${source}/fonts/*`)
    .pipe(changedInPlace({firstPass:true}))
    .pipe(gulp.dest(`${project.platform.output}/fonts`));

  return merge(taskCss, taskFonts);
}