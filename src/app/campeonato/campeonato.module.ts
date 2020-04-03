import { NgModule } from '@angular/core';
import { BotaoGerarCampeonatoComponent } from './botao-gerar-campeonato/botao-gerar-campeonato.component';
import { TituloComponent } from '../shared/titulo/titulo.component';
import { CampeonatoComponent } from './campeonato.component';
import { CommonModule } from '@angular/common';
import { GridFilmesModule } from './grid-filmes/grid-filmes.module';

@NgModule({
    declarations : [ 
        CampeonatoComponent,
        BotaoGerarCampeonatoComponent,
        TituloComponent 
    ], 
    imports: [
        CommonModule,
        GridFilmesModule
    ]
})
export class CampeonatoModule{
}