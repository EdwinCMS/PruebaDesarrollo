import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutoriaComponent } from './components/autoria/autoria.component';
import { ObraComponent } from './components/obra/obra.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoriaComponent,
    ObraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
