import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController, IonTitle } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit, AfterViewInit{

  @ViewChild(IonTitle, { read: ElementRef })
  ionTitleRef!: ElementRef<HTMLIonTitleElement>
  constructor(
    private animationController: AnimationController,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.viewChildAnimation();
    this.animationById();

  }

  animationById(){
    const element = document.getElementById('subHeader');
    if(element){
      this.animationController
      .create()
      .addElement(element)
      .duration(3000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.5)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ])
      .play()
    }
  }
  
  viewChildAnimation(){
    this.animationController
    .create()
    .addElement(this.ionTitleRef.nativeElement)
    .duration(3000)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2')
    .play();
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(['/home']);
  }

}
