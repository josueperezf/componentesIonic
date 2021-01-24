# componentes Ionic

## Instalacion de animate.style para la animacion

lo use en refresher animaciones

1. Pagina oficial <https://animate.style/>
2. instacion: npm install animate.css --save
3. en la documentacion oficial hay mas modelos para animaciones
4. importacion: para ello debemos usar el angular.json, en la seccion de styles, colca
{
    "input": "node_modules/animate.css/animate.min.css"
}

## Diseño o css
    para manejarlo debemos entrar en la documentacion oficial, ejemplo de ion-item, al fina saldra las propiedades que podemos editar, *nota:* se coloco en global.scss  ejemplo 
    ion-item{
        --background:red;
    }


## COMPONENTES

### ion-tabs
    Permite crear una seccion de tabs bien sea superior o inferior tipo instagram, esta implementacion no obliga a que el 100% de la pagina tenga esta estructura

### ion toast
    

## colocar menu siempre visible en pantallas grandes

    debemos ir a la seccion mas alta del proyecto, ejemplo appcomponent html, y alli dentro de la etiqueta ion-app colocar la <ion-split-pane que envuelva a todo lo demas, con ello hacemos que en dispositivos grandes no quede tanto espacio vacio
    *no me funciono* tengo clonado el repo de fernando herrera en mi github

    <ion-split-pane when="md"></ion-split-pane>