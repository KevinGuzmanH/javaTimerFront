import { Component } from '@angular/core';
import gsap from "gsap";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  ngAfterViewInit() {
    gsap.to("#leftIcon", {
      duration: 2,
      delay: 0.4,
      x: 50,
      ease: "slow",
      rotation: 360,
    });
  }

}
