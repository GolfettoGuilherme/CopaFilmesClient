import { NgModule } from '@angular/core';
import { FinalistaComponent } from './finalista/finalista.component';
import { ResultadoComponent } from './resultado.component';
import { TituloModule } from '../shared/titulo/titulo.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FinalistaComponent,
        ResultadoComponent
    ],
    exports: [
        ResultadoComponent
    ],
    imports: [TituloModule, CommonModule]
})
export class ResultadoModule{
}