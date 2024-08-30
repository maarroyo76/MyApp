import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  username!: string;
  name!: string;
  lastname!: string;
  edLevel!: string;
  birthday!: string;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    let state = this.router.getCurrentNavigation()?.extras?.state;
    if (state) {
      this.username = state['username'];
    }
   }

   async showInfo() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Hola ' + this.name + ' '+ this.lastname + '!',
    });
    alert.present();
  }

  clear(){
    this.birthday = '';
    this.name = '';
    this.lastname = '';
    this.edLevel = '';
  }
  

}
