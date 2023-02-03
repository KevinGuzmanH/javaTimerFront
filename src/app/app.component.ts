import { Component } from '@angular/core';
import {TimerSService} from "./service/timer-s.service";

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

  constructor(private timerService: TimerSService) {
  }

  codes = ["System.out.print(\"test\");","System.out.print(\"test\");"];

  getTimes(){
    this.timerService.getTime(this.codes).subscribe(
      data => {
        this.results = data;
        this.porcentageOne = this.results[0];
        this.porcentageTwo = this.results[1];

        if (this.porcentageOne.split(".")[0] != "Main" )
          this.porcentageOne = this.porcentageOne + " milliseconds";

        if (this.porcentageTwo.split(".")[0] != "Main" )
          this.porcentageTwo = this.porcentageTwo + " milliseconds";
      }
    )
  }



}
