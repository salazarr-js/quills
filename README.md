# 🪶 Quills
Mixins, utils, and style generators for Stylus.

> Inspirado en https://stylus.github.io/nib/

## Instalacion
Desde consola, teniendo instalado nodejs con npm ejecutas:
```
$ npm install quills
```

## Uso
Importa la libreria en tu archivo .styl
```
@import "quills"
```
Compila tu archivo .styl con stylus usando quills
```
$ stylus -u quills archivo.styl
```
Tambien puedes usarlo si compilas con gulp
```
var gulp   = require('gulp'),
    stylus = require('gulp-stylus'),
    quills = require('quills');

gulp.task('styles', function(){
  gulp.src('app/styles/*.styl')
    .pipe( stylus({ 'use': quills() }) )
    .pipe(gulp.dest('app/styles'));
 });
```

### Backgrounds

```
.example-bg
  bg red url("some.jpg") center cover
```
```
.example-bg {
  background-color: #f00;
  background-image url:("some.jpg");
  background-position: center;
  background-size: cover;
}
```
More Soon...
