import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '', loadChildren: () => import('./log/log.module').then(m => m.LogModule)
	},
	{
		path: 'login', loadChildren: () => import('./log/log.module').then(m => m.LogModule)
	},
	{
		path: 'menu', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
	}
];

@NgModule({
  	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule { }
