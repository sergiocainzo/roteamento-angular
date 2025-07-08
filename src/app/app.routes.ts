import { Routes } from '@angular/router';
import { PrimeiraPagina } from './primeira-pagina/primeira-pagina';
import { SegundaPagina } from './segunda-pagina/segunda-pagina';

export const routes: Routes = [
  { path: '', component: PrimeiraPagina },
  { path: 'primeira-pagina', component: PrimeiraPagina },
  { path: 'segunda-pagina', component: SegundaPagina },
];
