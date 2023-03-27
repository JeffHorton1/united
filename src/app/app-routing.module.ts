import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MessagesComponent } from './components/messages/messages.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';

const routes: Routes = [
  { path: "app", component: AppComponent},
  { path: "", redirectTo: "/login", pathMatch: "full"},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'accountSettings', component: AccountSettingsComponent},
  { path: 'messages', component: MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
