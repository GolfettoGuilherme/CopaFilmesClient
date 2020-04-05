import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampeonatoService } from '../services/campeonato.service';
import { FilmeService } from '../services/filme.service';

@Component({
    selector: 'app-campeonato',
    templateUrl: './campeonato.component.html',
    styleUrls: ['./campeonato.component.css']
})
export class CampeonatoComponent implements OnInit {

    ids : string[] = [];

    filmes: any;

    constructor(
        private router: Router, 
        private campeonatoService : CampeonatoService, 
        private filmeService: FilmeService){
    }

    ngOnInit() : void  {
        this.carregarFilmes();
    }

    async carregarFilmes(){
        this.filmes = await this.filmeService.buscarFilmes();
    }

    enviaResultados() {
        this.campeonatoService.setIds(this.ids);
        this.router.navigateByUrl('/resultado');
    }

    guardarSelecionados(id){
        if(this.ids.length < 8){
            this.ids.push(id);
        } else{
            alert("Ei, são só 8 filmes ta?");
        }
        
    }

    removerSelecionados(id){
        if(this.ids.includes){
            for(let i =0; i < this.ids.length;i++){
                if(this.ids[i] == id){
                    this.ids.splice(i,1);
                }
            }
        }
    }
}