import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoriaComponent } from './components/autoria/autoria.component';
import { ObraComponent } from './components/obra/obra.component';
import { PreguntasAutoriaComponent } from './components/preguntas-autoria/preguntas-autoria.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoriaComponent,
    ObraComponent,
    PreguntasAutoriaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
