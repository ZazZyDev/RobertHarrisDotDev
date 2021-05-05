import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations, SlideInOutAnimation, routerTransition } from './route-transition-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations, SlideInOutAnimation, routerTransition]
})
export class AppComponent {
  title = 'Robert Harris';
  isVisible = false;
  animationState = 'To';
  lastCall = 0

  constructor(private router: Router) {
  }


  getState(outlet) {
      return outlet.activatedRouteData.state;
    
  }
  // toggleShowDiv() {

  //      console.log(this.animationState);
  //      this.animationState = this.animationState === 'From' ? 'To' : 'From';
  //      console.log(this.animationState);

  // }


  prepareRoute(outlet: RouterOutlet) {
    return outlet &&
      outlet.activatedRouteData &&
      // tslint:disable-next-line: no-string-literal
      outlet.activatedRouteData['animationState'];
   }


  isNotLandingPage() {

    if (this.router.url === 'landing'
        || this.router.url === '/'
        || this.router.url === '**') {

          return false;

    }

    return true;

  }

}
