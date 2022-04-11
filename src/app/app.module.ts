import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LanguageListComponent} from './language/language-list/language-list.component';
import {FormsModule} from "@angular/forms";
import {DashboardComponent} from './dashboard/dashboard.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { WorkExperienceListComponent } from './work-experience/work-experience-list/work-experience-list.component';
import { ProjectPreviewComponent } from './projects/project-preview/project-preview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AppComponent,
    LanguageListComponent,
    DashboardComponent,
    ProjectListComponent,
    WorkExperienceListComponent,
    ProjectPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
