import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log('CARGO EL MODAL COMPONENT');
    
    // this.presentModal();
  }
  async abrirModal() {
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Josue',
        pais: 'Venezuela'
      }
    });
    await modal.present();
    // al cerrar el modal info, el valor retornado lo asignara a respuesta, creo que por obligacion la constante debe llamarse 'data'
    const {data} = await modal.onDidDismiss();
    console.log(data);
  }
}
