import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '', loadChildren: () => import('./login/login.module').then(m=> m.LoginModule)
  },
  { 
    path: 'login', loadChildren: () => import('./login/login.module').then(m=> m.LoginModule)
  },
  {
    path: 'registro', loadChildren: () => import('./registro/registro.module').then(m=> m.RegistroModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
