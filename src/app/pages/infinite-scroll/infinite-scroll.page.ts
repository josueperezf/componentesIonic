import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll, {static: false} ) infiniteScroll: IonInfiniteScroll;
  data: any[] = Array(20);
  constructor() { }

  ngOnInit() {
  }
  cargarData(event) {
    console.log('cargando data');
    setTimeout(() => {
      // el siguiente if detiene el scroll cuando se desee o no haya mas data
      if (this.data.length > 50) {
        event.target.disabled = true;
        this.infiniteScroll.disabled = true;
        return;
      }
      const nuevoArray = Array(20);
      this.data.push(...nuevoArray);
      // con la siguiente linea le digo que ya cargue los 20 registros mas, que detenga la carga por ahora
      event.target.complete();
      // para detener por completo la carga, se debe hacer event.target.disabled = true;
    }, 1000);
  }
}
