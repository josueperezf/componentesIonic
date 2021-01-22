import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNaci: Date = new Date();
  customYearValues = [2025, 2020, 2016, 2004, 1986];
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'Mundo',
        handler: (event) => {
          console.log(event);
        }
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  cambioFecha(event) {
    const fechaFormateada = new Date(event.detail.value);
    console.log(event);
    console.log(fechaFormateada);
  }
}
