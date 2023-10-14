import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mazo } from '../interface/mazo.interface';
import { Observable, map } from 'rxjs';
import { Card, Carta } from '../interface/carta.interface';

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  pathMazo = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
  
  constructor(private http: HttpClient) { }

  getMazo(): Observable<string>{
    return this.http.get<Mazo>(this.pathMazo).pipe(
      map(response => {
        return response.deck_id
      })
    );
  }

  getCarta(deck_id: string, cantidadCartas: number): Observable<Card[]>{
    const pathCarta = `https://www.deckofcardsapi.com/api/deck/${deck_id}/draw/?count=${cantidadCartas}`
    return this.http.get<Carta>(pathCarta).pipe(
      map(response => {
        return response.cards.map(card => this.parsearValorCarta(card));
      })
    )
  }

  private parsearValorCarta(carta: Card){
    const value = carta.value.replace('JACK', '11').replace('QUEEN', '12').replace('KING', '13').replace('ACE', '14');
    const valorNumerico = parseInt(value);
    carta.valor = valorNumerico;

    return carta;
  }
}
