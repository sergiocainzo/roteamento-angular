import { Routes } from '@angular/router';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';

export const routes: Routes = [
  { path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' },
  { path: 'primeira-pagina', component: PrimeiraPagina },
  { path: 'segunda-pagina', component: SegundaPagina },
  { path: '**', component:PaginaNaoEncontrada },
];
