import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inicio',
  templateUrl: './inicio.component.html'
})
export class InicioComponent implements OnInit{
  titulo = 'Bienvenido a DENUTI';

  ngOnInit(){
  	console.log('Inicio.component cargado !!');
  }
}
