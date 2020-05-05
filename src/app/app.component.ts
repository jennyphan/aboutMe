import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isHome = false;

  constructor(private router: Router) {
    router.events.pipe(
      filter((event) => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      this.isHome = false;
      if (event.url === '/home') {
        this.isHome = true;
      }
    });

  }
}
