# componentes Ionic

## Maquina virtual android

1. instalar android studio, si ya lo tenemos debemos ir a configuracion y seleccionar SDK manager, alli debemos seleccionar una version reciente de android pero que no sea alfa *Nota:* Si tenemos un proyecto abierto lo cerramos y veremos las opciones

2. en la seccion de configuracion debemos a configuracion  AVD Manager, 'para emular una version especifica de android', si no tenemos dana, podemos precionar donde dice 'crear dispositivo virtual', alli podemos seleccionar una version de telefono especifico

### crear un dispositvo

    en la seccion AVD Manager, seleccionamos 'create virtual device', alli presionamos en 'New hardware profile'

ejemplo para 'note 10 plus'

1. *Device name:* nombre que le daremos al telefono, ejemplo: 'note 10 plus'

2. *Device Type:* Phone/tablet

3. *Screen:* 6,8

4. *Resolution:* 1440 1920

5. *Memory:* 3

Luego le damos en siguiente, en esa seccion nos mostrara que version de android queremos para ese dispositivo, si no tenemos ninguna, alli nos muestra la opcion de descargar, presionamos siguiente

luego presionamos finish, esto crearia un dispositivo virtual, para abrirlo tendriamos que presionar en la imagen de play


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