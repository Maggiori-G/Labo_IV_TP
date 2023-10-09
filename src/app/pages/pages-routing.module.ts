import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {
    path: '', component: MenuComponent, 
    children:[
      {
        path: 'home',  loadChildren: () => import('./home/home.module').then(m=> m.HomeModule)
      },
      {
        path: 'ahorcado',  loadChildren: () => import('../juegos/ahorcado/ahorcado.module').then(m=> m.AhorcadoModule)
      },
      {
        path: 'mayor-menor',  loadChildren: () => import('../juegos/mayor-menor/mayor-menor.module').then(m=> m.MayorMenorModule)
      },
      {
        path: 'preguntados',  loadChildren: () => import('../juegos/preguntados/preguntados.module').then(m=> m.PreguntadosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
