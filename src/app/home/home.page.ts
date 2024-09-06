import { AfterViewInit, Component } from '@angular/core';
import { AnimationController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  username!: string;
  password!: string;
  mensaje!: string

  constructor(
      private toastController: ToastController,
      private router: Router,
      private loginService: LoginService,
      private animationController: AnimationController
  ) {}
  ngAfterViewInit(): void {
    this.animationHeader();
    this.animationTitle();
  }
  
  animationHeader(){
    const element = document.getElementById('header');
    if(element){
      this.animationController
      .create()
      .addElement(element)
      .duration(1500)
      .keyframes([
        { offset: 0, transform: 'translateX(-100px)', opacity: '0' },
        { offset: 0.5, transform: 'translateX(-50px)', opacity: '0.5' },
        { offset: 1, transform: 'translateX(0px)', opacity: '1' },
      ])
      .play()
    }
  }

  animationTitle(){
    const element = document.getElementById('title');
    if(element){
      this.animationController
      .create()
      .addElement(element)
      .duration(2000)
      .keyframes([
        { offset: 0, transform: 'scale(0.5)', opacity: '0.1' },
        { offset: 0.5, transform: 'scale(2)', opacity: '0.7' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ])
      .play()
    }
  }
  async validarLogin(){

    if(this.loginService.validateLogin(this.username, this.password)){
       this.showToastMessage('Login exitoso!', 'success')
       const navigationExtras = { 
          state: { 
            username: this.username
          }
        };
       this.router.navigate(['/profile'], navigationExtras);
    }else{
       this.showToastMessage('Invalido!', 'danger');
    }
  }
  async goIndex(){
    const navigationExtras = { 
      state: { 
        username: this.username
      }
    };
    this.router.navigate(['/index'], navigationExtras);
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