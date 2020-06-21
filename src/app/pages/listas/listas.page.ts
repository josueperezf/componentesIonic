import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

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
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
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

}
