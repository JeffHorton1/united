import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsComponent } from './components/forms/forms.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountSettingsComponent } from './components/account-settings/account-settings.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NgxFileDropModule } from 'ngx-file-drop';
import {HttpClientModule} from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { WebcamModule } from 'ngx-webcam';
import { TableComponent } from './table/table.component';
import { FormService } from './services/form.service';
import { LoginService } from './services/login.service';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    FormsComponent,
    ProfileComponent,
    AccountSettingsComponent,
    MessagesComponent,
    TableComponent,
    CameraComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFileDropModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule,
    WebcamModule,
    GoogleMapsModule,
    ReactiveFormsModule
    
  ],
  providers: [FormService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
