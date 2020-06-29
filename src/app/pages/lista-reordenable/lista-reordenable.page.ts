import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-reordenable',
  templateUrl: './lista-reordenable.page.html',
  styleUrls: ['./lista-reordenable.page.scss'],
})
export class ListaReordenablePage implements OnInit {
  personajes = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla' ];

  constructor() { }

  ngOnInit() {
  }
  reorder(event) {
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }
  onClick() {
    console.log(this.personajes);
  }
}
