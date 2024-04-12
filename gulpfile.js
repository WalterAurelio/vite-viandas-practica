import imagemin from 'gulp-imagemin';
import pkg from 'gulp';
const { src, dest } = pkg;
import webp from 'gulp-webp';


function minImage() {
  return src('./src/assets/*')
    .pipe(imagemin())
    .pipe(dest('./src/assets/imagemin/'));
}

function webpImage() {
  return src('./src/assets/imagemin/*')
    .pipe(webp())
    .pipe(dest('./src/assets/webp/'))
}

export const minImagenes = minImage;
export const webpImagenes = webpImage;

