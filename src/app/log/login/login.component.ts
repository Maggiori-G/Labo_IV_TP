import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    usuario={
        email: '',
        password: ''
    }

    constructor(private authService: AuthService, private router: Router) { }

    autoCompletar(){
      this.usuario.email='ejemplo@ejemplo.com.ar';
      this.usuario.password='a12345';
    }

    ingresar(){
        const {email, password} = this.usuario;
        this.authService.login(email, password).then((res) => {
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
