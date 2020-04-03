import { NgModule } from '@angular/core';
import { FilmeComponent } from './filme/filme.component';
import { GridFilmesComponent } from './grid-filmes.component';

@NgModule({
    declarations: [ 
        FilmeComponent,
        GridFilmesComponent
    ],
    exports: [
        GridFilmesComponent,
        
    ]
})
export class GridFilmesModule{
}