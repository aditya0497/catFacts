import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {}

  navigateToFactEntry(): void {
    this.router.navigate(['/']);
  }

  navigateToTagList(): void {
    this.router.navigate(['/tag-list']);
  }
}
