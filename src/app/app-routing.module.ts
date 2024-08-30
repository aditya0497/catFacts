import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactEntryComponent } from './components/fact-entry/fact-entry.component';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TagViewComponent } from './components/tag-view/tag-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'fact-entry', component: FactEntryComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'tag-list', component: TagListComponent },
  { path: 'tag/:tag', component: TagViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
