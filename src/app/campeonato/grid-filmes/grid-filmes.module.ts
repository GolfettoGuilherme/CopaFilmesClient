import { NgModule } from '@angular/core';
import { FilmeComponent } from './filme/filme.component';
import { GridFilmesComponent } from './grid-filmes.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ 
        FilmeComponent,
        GridFilmesComponent
    ],
    exports: [
        GridFilmesComponent  
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        CommonModule
    ]
})
export class GridFilmesModule{
}