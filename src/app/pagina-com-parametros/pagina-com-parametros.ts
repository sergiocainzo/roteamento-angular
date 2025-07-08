import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-com-parametros',
  imports: [CommonModule],
  templateUrl: './pagina-com-parametros.html',
  styleUrl: './pagina-com-parametros.scss',
})
export class PaginaComParametros implements OnInit {
  id: number | null = null;
  idade: number | null=null;
  nome: string | null=null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome");
    })
  }
}
