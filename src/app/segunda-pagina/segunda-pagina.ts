import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-segunda-pagina',
  imports: [],
  templateUrl: './segunda-pagina.html',
  styleUrl: './segunda-pagina.scss'
})
export class SegundaPagina {

  constructor(private router:Router){}

  retornarPrimeiraPagina(){
    this.router.navigate(["primeira-pagina"]);
  }


}
