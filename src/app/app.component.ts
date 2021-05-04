import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './route-transition-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  title = 'Robert Harris';
  isVisible = false;

  constructor(private router: Router) {}




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
