import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FactEntryComponent } from './components/fact-entry/fact-entry.component';
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import { TagListComponent } from './components/tag-list/tag-list.component';
import { TagViewComponent } from './components/tag-view/tag-view.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FactEntryComponent,
    TagListComponent,
    TagViewComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
