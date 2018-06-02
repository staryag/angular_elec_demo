import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cardios = [
    {value: 'comba-0', viewValue: 'Saltos comba'},
    {value: 'correr-1', viewValue: 'Correr'},
    {value: 'escaleras-2', viewValue: 'Subir escaleras'}
  ];

  abdominales = [
    {value: 'normal-0', viewValue: 'Normales'},
    {value: 'oblicua-1', viewValue: 'Oblicuas'},
    {value: 'piernas-2', viewValue: 'Piernas arriba'}
  ];

  flexiones = [
    {value: 'normal-0', viewValue: 'Normales'},
    {value: 'centro-1', viewValue: 'Manos centro'},
    {value: 'abierta-2', viewValue: 'Manos abiertas'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
