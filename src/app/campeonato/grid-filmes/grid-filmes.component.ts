import { Component, OnInit, Input } from '@angular/core';
import { FilmeService } from './filme/filme.service';

@Component({
  selector: 'app-grid-filmes',
  templateUrl: './grid-filmes.component.html',
  styleUrls: ['./grid-filmes.component.css']
})
export class GridFilmesComponent implements OnInit {

  filmes: any;

  constructor(private filmeService: FilmeService) {}

  ngOnInit() {
    this.carregarFilmes();
  }

  async carregarFilmes(){
    this.filmes = await this.filmeService.buscarFilmes();
    console.log(this.filmes);
  }

  
}
