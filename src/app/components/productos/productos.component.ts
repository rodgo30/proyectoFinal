import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit{
  titulo = 'Página DENUTI productos';

  ngOnInit(){
  	console.log('productos.component cargado !!');
  }
}
