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
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
