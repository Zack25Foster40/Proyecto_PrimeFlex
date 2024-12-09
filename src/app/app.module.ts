import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa BrowserAnimationsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntregableComponent } from './entregable/entregable.component';
import { InicioComponent } from './inicio/inicio.component';
import { Entregable1Component } from './entregable-1/entregable-1.component';
import { Entregable2Component } from './entregable-2/entregable-2.component';
import { ListaTrabajosComponent } from './lista-trabajos/lista-trabajos.component';
import { BotonesComponent } from './botones/botones.component';

@NgModule({
  declarations: [
    AppComponent,
    EntregableComponent,
    InicioComponent,
    Entregable1Component,
    Entregable2Component,
    ListaTrabajosComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
