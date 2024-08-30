import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username!: string;
  password!: string;

  mensaje!: string

  constructor(
      private toastController: ToastController,
      private router: Router
  ) {}

  async validarLogin(){
    const userdata: string= 'Martin';
    const pwddata: string= '123456';

    if(userdata === this.username 
      && pwddata === this.password){
       this.showToastMessage('Login exitoso!', 'success')
       const navigationExtras = { 
          state: { 
            username: this.username
          }
        };
       this.router.navigate(['/index'], navigationExtras);
    }else{
       this.showToastMessage('Invalido!', 'danger');
    }
  }
  async goProfile(){
    const navigationExtras = { 
      state: { 
        username: this.username
      }
    };
    this.router.navigate(['/profile'], navigationExtras);
  }

  async showToastMessage(message: string, color: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }

}