import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoriaComponent } from './components/autoria/autoria.component';
import { ObraComponent } from './components/obra/obra.component';
import { PreguntasAutoriaComponent } from './components/preguntas-autoria/preguntas-autoria.component';
import { DescripcionAutoriaComponent } from './components/descripcion-autoria/descripcion-autoria.component';
import { TituloHistoriaComponent } from './components/titulo-historia/titulo-historia.component';
import { CheckboxObraHistoriaComponent } from './components/checkbox-obra-historia/checkbox-obra-historia.component';
import { CheckboxObraPotencialComponent } from './components/checkbox-obra-potencial/checkbox-obra-potencial.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoriaComponent,
    ObraComponent,
    PreguntasAutoriaComponent,
    DescripcionAutoriaComponent,
    TituloHistoriaComponent,
    CheckboxObraHistoriaComponent,
    CheckboxObraPotencialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
