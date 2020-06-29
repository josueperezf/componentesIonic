import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { IonList } from '@ionic/angular';
interface Usuario {
  id: number;
  name: string;
  username: string;
  address: any;
  phone?: string;
}

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
})

export class ListasPage implements OnInit {
  public usuarios; // Usuario[];
  @ViewChild('lista', {static: false}) lista: IonList;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
    // la linea anterior es lo mismo que lo anterior,
    // con la diferencia, que para que lo anterior funcione se debe colocar el async en el for del html
    /*
    this.dataService.getUsers().subscribe(
      (data: Usuario[] ) => {
        if (data && data.length > 0 ) {
          this.usuarios = data;
        }
        console.log(data);
      }
    );*/
  }
  public favorite(usuario) {
    console.log('favorite', usuario);
    // cierra el slider de la lista
    this.lista.closeSlidingItems();
  }
  public share(usuario) {
    console.log('share', usuario);
    this.lista.closeSlidingItems();
  }
  public borrar(usuario) {
    console.log('borrar', usuario);
    this.lista.closeSlidingItems();
  }
}
