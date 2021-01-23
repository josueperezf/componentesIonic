import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher-con-animacion',
  templateUrl: './refresher-con-animacion.page.html',
  styleUrls: ['./refresher-con-animacion.page.scss'],
})
export class RefresherConAnimacionPage implements OnInit {
  items: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  doRefresh(event) {
    setTimeout(() => {
      this.items = Array(20);
      event.target.complete();
    }, 1500);
  }
}
