import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent {
    usuario={
        email: '',
        password: ''
    }
    
    constructor(private authService: AuthService, private router: Router) { }
    
    registrar(){
        const {email, password} = this.usuario;
        this.authService.register(email, password).then((res) => {
            console.log('logueado: ', res);
            if(res){
                this.router.navigateByUrl('menu')
            }
            else{
                console.error('no entra')
            }
        })
    }

}
