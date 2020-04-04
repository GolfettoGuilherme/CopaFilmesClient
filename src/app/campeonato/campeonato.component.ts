import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-campeonato',
    templateUrl: './campeonato.component.html',
    styleUrls: ['./campeonato.component.css']
})
export class CampeonatoComponent implements OnInit {

    ids : string[] = [];
    contagem: number = 0;

    constructor(){
    }

    ngOnInit() : void  {
    }
}