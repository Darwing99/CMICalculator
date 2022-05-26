import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
})
export class ResultadoComponent implements OnInit {
  imc: number;
  resultado?: string;
  descripcion?: string;
  constructor(private route: ActivatedRoute) {
    this.imc = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }
  getResultado() {
    if (this.imc > 30) {
      this.resultado = 'Obeso';
      this.descripcion =
        'Intente hacer mas ejercicio, y tenga una dieta adecuada';
    } else if (this.imc > 25) {
      this.resultado = 'Sobre Peso';
      this.descripcion = 'Intente hacer mas ejercicio, aun esta a tiempo';
    } else if (this.imc >= 18) {
      this.resultado = 'Normal';
      this.descripcion = 'Mantenga sus habitos equilibrados.';
    } else if (this.imc < 18) {
      this.resultado = 'Bajo peso';
      this.descripcion = 'Debe consumir alimentos con mucha fibra';
    }
  }
}
