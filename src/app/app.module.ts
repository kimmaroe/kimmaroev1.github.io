import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LanguagesComponent} from './languages/languages.component';
import {FormsModule} from "@angular/forms";
import {LanguageDetailComponent} from './language-detail/language-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperiencesComponent } from './work-experiences/work-experiences.component';

@NgModule({
  declarations: [
    AppComponent,
    LanguagesComponent,
    LanguageDetailComponent,
    DashboardComponent,
    ProjectsComponent,
    WorkExperiencesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
