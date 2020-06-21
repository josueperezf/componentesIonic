import { Component, OnInit } from '@angular/core';

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
  enviar() {
    console.log('entro al metod enviar');
    console.log(this.usuario);
  }
}
