import { Component } from '@angular/core';
import {TimerSService} from "./service/timer-s.service";
import { gsap, Power2, Elastic ,Bounce} from 'gsap/all';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'javatimer';
  results = [];
  porcentageOne = "0 secs";
  porcentageTwo = "0 secs";
  test = "test";
  public isLeftGreen = false;
  public isRigthGreen = false;

  constructor(private timerService: TimerSService) {
  }

  codes = ["System.out.print(\"test\");","System.out.print(\"test\");"];

  getTimes(){
    this.timerService.getTime(this.codes).subscribe(
      data => {
        this.results = data;
        this.porcentageOne = this.results[0];
        this.porcentageTwo = this.results[1];

        if (Number(this.porcentageOne) < Number(this.porcentageTwo)){
          this.isLeftGreen = true;
          this.isRigthGreen = false;
          gsap.to("#card", {
            duration: 2,
            y: -100,
            yoyo: true,
            ease: Bounce.easeOut,
            repeat: 1,
          });
        }
        else{
          this.isRigthGreen = true;
          this.isLeftGreen = false;
          gsap.to("#card2", {
            duration: 2,
            y: -100,
            yoyo: true,
            ease: Bounce.easeOut,
            repeat: 1,
          });
        }

        if (this.porcentageOne.split(".")[0] != "Main" )
          this.porcentageOne = this.porcentageOne + " milliseconds";

        if (this.porcentageTwo.split(".")[0] != "Main" )
          this.porcentageTwo = this.porcentageTwo + " milliseconds";
      }
    )
  }



}
