import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            icon: 'pi pi-fw pi-file',
            routerLink: 'home'
        },
        {
            label: 'Juegos',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Ahorcado',
                    icon: 'pi pi-fw pi-align-left',
                    routerLink: 'ahorcado'
                },
                {
                    label: 'Mayor o Menor',
                    icon: 'pi pi-fw pi-align-right',
                    routerLink: 'mayor-menor'
                },
                {
                    label: 'Preguntados',
                    icon: 'pi pi-fw pi-align-center',
                    routerLink: 'preguntados'
                }
            ]
        },
        {
            label: 'Chat en Vivo',
            icon: 'pi pi-fw pi-user',
            routerLink: 'chat'
        },
        {
            label: 'Sobre Mi',
            icon: 'pi pi-fw pi-calendar',
            routerLink: 'about'
        },
        {
            label: 'Quit',
            icon: 'pi pi-fw pi-power-off',
            
        }
    ];
}
}
