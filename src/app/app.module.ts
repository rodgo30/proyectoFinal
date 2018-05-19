import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//Componentes

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { AcercaComponent } from './components/acerca/acerca.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProductosComponent,
    RecetasComponent,
    AcercaComponent,
    ContactenosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
