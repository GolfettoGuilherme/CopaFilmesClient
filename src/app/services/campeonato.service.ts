import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filme } from '../campeonato/filme/filme';


const URL = 'https://localhost:44317/api/Home/ExecutarProcessamento';

@Injectable({
    providedIn: 'root'
})
export class CampeonatoService{

    private ids : string[];

    constructor(private http: HttpClient){}

    setIds(ids: string[]){
        this.ids = ids;
    }

    getIds(){
        return this.ids; 
    }

    realizaCampeonato(){
        return this.http.post<Filme[]>(URL,{ Ids: this.ids});
    }
}