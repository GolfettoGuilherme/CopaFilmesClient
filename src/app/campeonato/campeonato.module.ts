import { NgModule } from '@angular/core';
import { BotaoGerarCampeonatoComponent } from './botao-gerar-campeonato/botao-gerar-campeonato.component';
import { CampeonatoComponent } from './campeonato.component';
import { CommonModule } from '@angular/common';
import { TituloModule } from '../shared/titulo/titulo.module';
import { BrowserModule } from '@angular/platform-browser';
import { FilmeComponent } from './filme/filme.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations : [ 
        CampeonatoComponent,
        BotaoGerarCampeonatoComponent,
        FilmeComponent
    ], 
    imports: [
        BrowserModule,
        CommonModule,
        TituloModule,
        FormsModule
    ]
})
export class CampeonatoModule{
}