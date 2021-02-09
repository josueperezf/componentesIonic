# componentes Ionic

## Maquina virtual android

1. instalar android studio, si ya lo tenemos debemos ir a configuracion y seleccionar *SDK manager*, alli debemos seleccionar una version reciente de android pero que no sea alfa *Nota:* Si tenemos un proyecto abierto lo cerramos y veremos las opciones

2. en la seccion de configuracion debemos a configuracion  *AVD Manager*, 'para emular una version especifica de android', si no tenemos dana, podemos precionar donde dice 'crear dispositivo virtual', alli podemos seleccionar una version de telefono especifico

### ejemplo de crear un dispositvo para emular en android studio

    en la seccion AVD Manager, seleccionamos 'create virtual device', alli presionamos en 'New hardware profile'

ejemplo para 'note 10 plus'

1. *Device name:* nombre que le daremos al telefono, ejemplo: 'note 10 plus'

2. *Device Type:* Phone/tablet

3. *Screen:* 6,8

4. *Resolution:* 1440 1920

5. *Memory:* 3

Luego le damos en siguiente, en esa seccion nos mostrara que version de android queremos para ese dispositivo, si no tenemos ninguna, alli nos muestra la opcion de descargar, presionamos siguiente

luego presionamos finish, esto crearia un dispositivo virtual, para abrirlo tendriamos que presionar en la imagen de play


### Capacitor correr aplicaciones en dispositivos fisicos y emulados

    Es de recordar que para este proceso se requiere tener instalado android studio con su SDK y AVD
para este proceso si queremos documentacion oficial, podemos ir a la pagina de ionic docs, seleccionamos *'Android Development'* <https://ionicframework.com/docs/developing/android>

- en nuestro telefono emulado debemos habilitar el *USB DEBUGGING*, ir a ajustes, System, alli deben estar las *developer options*, sino aparecen, no es de preocupar, tendriamos que irnos a, *ajustes, about emulated device*, al estar alli hacemos click muchas veces en *build number* para habilitar el modo developer. despues de hacer ello, en system ya deberia estar la opcion de *developer options* , donde habilitamos  *USB DEBUGGING* 

- Si es la primera vez que realizamos esta tarea y no tenemos la *wwww* en nuestro proyecto, debemos ejecutar el siguiente comando *ionic build* 

- En este momento le podemos asignar el appId de la aplicacion en el archivo capacitor.config.json, si esto fuera con cordova es en el archivo config.xml

- Si tenemos nuestra carpeta www creada, podemos ejecutar el siguiente comando para crear nuestro proyecto en android *ionic capacitor add android*, esto creara la carpetas android y .gradle

- *OPCION LENTA* si realizamos cambios en ionic y queremos actualizar nuestra carpeta android con ese contenido, podemos ejecutar *ionic capacitor copy android* por cada vez que guardemos cambios en el proyecto, si hacemos esto teniendo en ejecucion android studio, los cambios no se veran de una vez, tendre que precionar refrescar que es el boton dond antes estaba play para abrir la app en adroid studio, tambien se podria precionar control R

- *OPCION RAPIDA*, para este metodo usamos el 'Live reload', esto hace que cada cambio que hagamos en ionic se vea automaticamente reflejado en nuestra app ionic, es de destacar que si es para correr en android debemos colocar la direccion ip de nuestra maquina, no localhost, si estuvieramos corriendo en iphone, bastaria con localhost o el valor por default

    1. vemos la ip de nuestra maquina, por consola seria ipconfig, seleccionamos la ipv4, en este ejemplo seria 192.168.1.86

    2. para correr ejecutamos ionic capacitor run android -l --host=mi-direccion-ip-no-colocar-localhost

    3. si realizamos un cambio y no se ve, podemos presionar control r, o darle a la flecha que esta donde estaba la imagen de play para abrir en el emulador


- *nota* los logs se pueden ver de dos formas, una es desde el navegador web, usando chrome://inspect/#devices , la otra forma es directamente con android studio, para ello debemos tener corriendo la aplicacion en android studio, y ver en la parte inferior donde dice *logcat* van a salir muchos mensajes, los borramos presionando en la papelera, esperamos a que ya no salgan logs normales de la ejecucion, luego comenzamos a realizar nuestras pruebas sin logs de ajemos a nuestra ejecucion que molesten. los cambios que hagamos en el emulador en android studio los podemos ver en el navegador y en android simultaneamente 

- 

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
