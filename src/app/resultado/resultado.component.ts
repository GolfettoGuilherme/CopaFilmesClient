import { Component, OnInit } from '@angular/core';
import { Filme } from '../campeonato/filme/filme';
import { CampeonatoService } from '../services/campeonato.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  filmesVencedores: Filme[]
 
  constructor(private campeonatoService : CampeonatoService) {
   
  }

  ngOnInit(): void {
    this.campeonatoService.realizaCampeonato().subscribe(vencedores => {
      console.log(vencedores);
      this.filmesVencedores = vencedores;
    });
  }

}
