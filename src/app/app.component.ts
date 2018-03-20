import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isHome = false;
  
  constructor(private router: Router) {
    router.events
    .filter(event => event instanceof NavigationStart)
    .subscribe((event: NavigationStart) => {

      this.isHome = false;
      if (event.url === '/home') {
        this.isHome = true;
      }

      // You only receive NavigationStart events
    });

  }
}
