import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const URL = 'https://localhost:5001/api/Home/BuscarFilmes';

@Injectable({providedIn: 'root'})
export class FilmeService{


    constructor(private http: HttpClient){   
    }

    buscarFilmes(){
        return this.http.get<any>(URL).toPromise();
    }
}