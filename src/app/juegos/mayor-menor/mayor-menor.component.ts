import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/interface/carta.interface';
import { CartaService } from 'src/app/servicios/carta.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit {
  idMazo = '';
  carta: Card = {
    code: '',
    image:  '',
    images: {
      svg: '', png: ''
    },
    value:  '',
    suit:   '',
    valor: -1,
  };
  cartaMostrada!: Card;
  cartaActual!: Card;
  decision!: string;
  puntaje!: number;
  contadorCartas = 1;
  cartaDorzo = '../../../assets/carta-back.png'

  constructor(private cartaService: CartaService){ }

  ngOnInit(): void {
    this.getMazo();
    this.puntaje = 0;
  }

  mostrar(){
    console.log(this.cartaMostrada)
    console.log(this.cartaActual)
  }
  
  getMazo() {
    this.cartaService.getMazo().subscribe(id => {
      this.idMazo = id
      this.getCarta();
      this.getSiguienteCarta();
    });
  }
  
  getCarta(){
    this.cartaService.getCarta(this.idMazo, 1).subscribe(c =>{
      this.cartaMostrada = c[0]
    });
  }
  
  getSiguienteCarta(){
    this.cartaService.getCarta(this.idMazo, 1).subscribe(c =>{
      this.cartaActual = c[0]
    });
  }

  jugar(decision:string){
    
    this.getSiguienteCarta();
    if((decision == 'mayor' && this.cartaActual.valor > this.cartaMostrada.valor) || (decision == 'menor' && this.cartaActual.valor < this.cartaMostrada.valor)){
      this.puntaje += 10;
    }
    this.cartaDorzo = this.cartaActual['images'].png;
    this.contadorCartas++;
    console.log(this.contadorCartas);
    this.cartaMostrada = this.cartaActual;    
  }

  reset() {
    this.puntaje = 0;
    this.contadorCartas = 1;
    this.getMazo();
  }

  


}
