import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({ 
  providedIn: 'root'
})
export class PalabraService {

  constructor(private http: HttpClient) { }
  
  apiPath: string = 'https://clientes.api.greenborn.com.ar/public-random-word'

  getPalabra(): Observable<string[]>{
    return this.http.get<string[]>(this.apiPath);
  }
}
