import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFixersComponent } from './components/new-fixers/new-fixers.component';
import { RegisteredFixersComponent } from './components/registered-fixers/registered-fixers.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TaskComponent } from './components/task/task.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { FixerDetailsComponent } from './components/fixer-details/fixer-details.component';
import { CategoryComponent } from './components/category/category.component';
import { LocationComponent } from './components/location/location.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { LocationAddComponent } from './components/location-add/location-add.component';
import { SliderImagesComponent } from './components/slider-images/slider-images.component';
import { ImageAddComponent } from './components/image-add/image-add.component';


@NgModule({
  declarations: [
    AppComponent,
    NewFixersComponent,
    RegisteredFixersComponent,
    ClientsComponent,
    TaskComponent,
    ProposalComponent,
    AdminComponent,
    LoginComponent,
    DashboardComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    ClientDetailsComponent,
    TaskDetailsComponent,
    FixerDetailsComponent,
    CategoryComponent,
    LocationComponent,
    CategoryAddComponent,
    LocationAddComponent,
    SliderImagesComponent,
    ImageAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
