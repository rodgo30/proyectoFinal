import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactenos',
  templateUrl: './contactenos.component.html'
})
export class ContactenosComponent implements OnInit{
  titulo = 'Página DENUTI contactenos';

  ngOnInit(){
  	console.log('contactenos.component cargado !!');
  }
}
