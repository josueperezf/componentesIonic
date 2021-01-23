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
