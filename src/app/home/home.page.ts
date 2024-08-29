import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  message: string;

  username!: string;
  password!: string;

  mensaje!: string

  constructor() {
    this.message = 'Bienvenido!'
  }
  
  mostrarMensajeBienvenida(){
    this.mensaje= 'Bienvenido '+ this.username + '!';
  }
  mostrarMensajeInvalido(){
    this.mensaje='Invalido!'
  }

  validarLogin(){
    const userdata: string= 'Martin';
    const pwddata: string= '123456';

    if(userdata === this.username && pwddata === this.password){
       this.mensaje= 'Bienvenido '+ this.username + '!';
    }else{
       this.mensaje='Invalido!'
    }
  }

}