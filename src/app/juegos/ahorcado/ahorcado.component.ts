import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PalabraService } from 'src/app/servicios/palabra.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {
  corriendo?: Observable<string[]>;
  title = "Ahorcado";
  palabra: string = "";
  palabraOculta = "";
  intentos = 0;
  gano = false;
  perdio = false;
  letras = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  constructor(private palabraService: PalabraService) { }

  ngOnInit(): void {
      this.getPalabra();
  }


  getPalabra(){
    this.corriendo = this.palabraService.getPalabra()
    this.corriendo.subscribe((p) => {
      console.log(p);
      this.palabra = p[0];
      this.palabraOculta = "_ ".repeat(this.palabra.length);
    })
  }

  comprobar(letra:string) {
    this.existeLetra(letra);
    const palabraOcultaArreglo = this.palabraOculta.split(" ");

    for (let i = 0; i <= this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArreglo[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArreglo.join(" ");
    this.verificaGanador();
  }
  verificaGanador() {
    const palabraArr = this.palabraOculta.split(" ");
    const palabraEvaluar = palabraArr.join("");

    if (palabraEvaluar === this.palabra) {
      this.gano = true;
    }
    if (this.intentos === 9) {
      this.perdio = true;
    }
  }

  existeLetra(letra:string) {
    if (this.palabra.indexOf(letra) >= 0) {
      console.log("La letra existe" + letra);
    } else {
      this.intentos++;
    }
  }
}
