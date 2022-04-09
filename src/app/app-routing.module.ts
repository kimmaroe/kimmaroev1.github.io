import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LanguageListComponent} from "./language/language-list/language-list.component";
import {DashboardComponent} from './dashboard/dashboard.component';
import {LanguageDetailComponent} from "./language/language-detail/language-detail.component";

const routes: Routes = [
  {path: 'languages', component: LanguageListComponent},
  {path: 'detail/:name', component: LanguageDetailComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
