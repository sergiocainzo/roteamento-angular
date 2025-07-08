import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira-pagina',
  imports: [],
  templateUrl: './primeira-pagina.html',
  styleUrl: './primeira-pagina.scss',
})
export class PrimeiraPagina {
  constructor(private router: Router) {}

  moverParaSegundaPagina() {
    this.router.navigate(["segunda-pagina"]);
  }
}
