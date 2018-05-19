import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recetas',
  templateUrl: './recetas.component.html'
})
export class RecetasComponent implements OnInit{
  titulo = 'Página DENUTI recetas';

  ngOnInit(){
  	console.log('recetas.component cargado !!');
  }
}
