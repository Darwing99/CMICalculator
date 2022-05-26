import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  edad = 25;
  peso = 60;
  sexo = 'Masculino';
  altura = 170;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  incrementEdad() {
    if (this.edad >= 0) {
      this.edad++;
    }
    if (this.edad <= 0) {
      this.edad = 0;
    }
  }
  decrementEdad() {
    if (this.edad > 0) {
      this.edad--;
    }
    if (this.edad <= 0) {
      this.edad = 0;
    }
  }
  masculino() {
    this.sexo = 'masculino';
  }
  femenino() {
    this.sexo = 'femenino';
  }
  changeHeith(event: any) {
    this.altura = event.target.value;
  }

  incrementPeso() {
    if (this.peso >= 0) {
      this.peso++;
    }
    if (this.peso <= 0) {
      this.peso = 0;
    }
  }
  decrementPeso() {
    if (this.peso > 0) {
      this.peso--;
    }
    if (this.peso <= 0) {
      this.peso = 0;
    }
  }
  calcularIMC() {
    const IMC=this.peso/Math.pow(this.altura/100,2)

    this.router.navigate(['/resultado' ,IMC.toFixed(2)]);
  }
}
