import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    TabMenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
