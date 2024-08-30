import { Component } from '@angular/core';
import {
  NavigationEnd,
  Router
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isLandingPage: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = event.url === '/landing';
      }
    });
  }

  public navigateToFactEntry(): void {
    this.router.navigate(['/']);
  }

  public navigateToTagList(): void {
    this.router.navigate(['/tag-list']);
  }
}
