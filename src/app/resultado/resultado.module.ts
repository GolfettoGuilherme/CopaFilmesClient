import { NgModule } from '@angular/core';
import { FinalistaComponent } from './finalista/finalista.component';
import { ResultadoComponent } from './resultado.component';
import { TituloModule } from '../shared/titulo/titulo.module';

@NgModule({
    declarations: [
        FinalistaComponent,
        ResultadoComponent
    ],
    exports: [
        ResultadoComponent
    ],
    imports: [TituloModule]
})
export class ResultadoModule{
}