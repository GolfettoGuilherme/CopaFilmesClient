import { NgModule } from '@angular/core';
import { BotaoGerarCampeonatoComponent } from './botao-gerar-campeonato/botao-gerar-campeonato.component';
import { CampeonatoComponent } from './campeonato.component';
import { CommonModule } from '@angular/common';
import { GridFilmesModule } from './grid-filmes/grid-filmes.module';
import { TituloModule } from '../shared/titulo/titulo.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations : [ 
        CampeonatoComponent,
        BotaoGerarCampeonatoComponent
    ], 
    imports: [
        BrowserModule,
        CommonModule,
        GridFilmesModule,
        TituloModule
    ]
})
export class CampeonatoModule{
}