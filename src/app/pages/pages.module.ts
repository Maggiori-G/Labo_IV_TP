import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';


@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
