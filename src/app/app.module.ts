import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { CampeonatoModule } from './campeonato/campeonato.module';
import { ResultadoModule } from './resultado/resultado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CampeonatoModule,
    ResultadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
