import {
  Component,
  OnInit
} from "@angular/core";
import {
  NavigationEnd,
  Router
} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public isLandingPage: boolean = false;

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isLandingPage = event.urlAfterRedirects === '/landing';
      }
    });
  }

  public navigateToFactEntry(): void {
    this.router.navigate(['/fact-entry']);
  }

  public navigateToTagList(): void {
    this.router.navigate(['/tag-list']);
  }
}
