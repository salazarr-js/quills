# Quills
Mixins, utilidades, componentes y generadores de estilos css, para mejorar la experiencia de Stylus.
> Inspirado en [Nib](http://tj.github.io/nib/ "Stylus - Nib")

## Instalacion
Desde consola, teniendo instalado nodejs con npm ejecutas:
```
$ npm install quills -g
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

###Backgrounds

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