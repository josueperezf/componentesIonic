import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  superHeroes: Observable<any>;
  seleccion = '';
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }
  segmentChanged(event) {
    console.log(event.detail.value);
    if (event.detail.value === 'todos') {
      return this.seleccion = '';
    }
    this.seleccion = event.detail.value;
  }
}
