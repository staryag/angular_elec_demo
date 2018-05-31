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
  
  constructor() { }

  ngOnInit() {
  }

}
