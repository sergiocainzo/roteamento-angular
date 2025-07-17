import { Routes } from '@angular/router';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';
import { PaginaNaoEncontrada } from './pagina-nao-encontrada/pagina-nao-encontrada';
import { PaginaComParametros } from './pagina-com-parametros/pagina-com-parametros';

export const routes: Routes = [
  { path: '', redirectTo: 'primeira-pagina', pathMatch: 'full' },
  { path: 'primeira-pagina', component: PrimeiraPagina },
  { path: 'segunda-pagina', component: SegundaPagina },
  { path: 'pagina-com-parametros/:id', component: PaginaComParametros },
  {
    path: 'lazy-loading',
    loadComponent: () =>
      import('./lazy-loading/lazy-loading').then((m) => m.LazyLoading),
  },
  { path: '**', component: PaginaNaoEncontrada },
];
