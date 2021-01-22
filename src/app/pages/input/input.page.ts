import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {
 nombre: string;
 usuario ;
  constructor() { }

  ngOnInit() {
    this.usuario = {
      email: '',
      password: '',
    };
  }
  enviar(formulario: NgForm) {
    console.log('entro al metod enviar');
    console.log(this.usuario);
    // esto es para ver la informacion del formulario, si esta validado y demas
    console.log(formulario);
  }
}
