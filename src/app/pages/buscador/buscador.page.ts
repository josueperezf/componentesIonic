import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  albums: any[] = [];
  textoBuscar = '';
  constructor(private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe((data) => {
      this.albums = data;
    });
  }
  onSearchChange(event) {
    // console.log(event);
    this.textoBuscar = event.detail.value;
  }
}
