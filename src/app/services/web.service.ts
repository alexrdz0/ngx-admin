import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Datos } from "../models/datos";

@Injectable({
  providedIn: 'root'
})
export class WebService {


  constructor(private http: HttpClient) { }

  URL_API = 'http://localhost:4000/api/datos'

  datos: Datos[] = [];

  getDatos(){
    return this.http.get<Datos[]>(this.URL_API);
    
  }

}
