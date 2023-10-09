import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authService: AngularFireAuth) { }

  async register(email: string, password: string){
    try{
        return await this.authService.createUserWithEmailAndPassword(email, password)
    }
    catch(err){
        console.error('Error en el login', err);
        return null;
    }
  }

  async login(email: string, password: string){
    try{
        return await this.authService.signInWithEmailAndPassword(email, password)
    }
    catch(err){
        console.error('Error en el login', err);
        return false;
    }
  }

  getUsuarioLogueado(){
    return this.authService.authState;
  }

  logOut(){
    this.authService.signOut;
  }
}
