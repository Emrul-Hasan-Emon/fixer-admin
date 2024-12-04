import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFixersComponent } from './components/new-fixers/new-fixers.component';
import { RegisteredFixersComponent } from './components/registered-fixers/registered-fixers.component';
import { ClientsComponent } from './components/clients/clients.component';
import { TaskComponent } from './components/task/task.component';
import { ProposalComponent } from './components/proposal/proposal.component';

@NgModule({
  declarations: [
    AppComponent,
    NewFixersComponent,
    RegisteredFixersComponent,
    ClientsComponent,
    TaskComponent,
    ProposalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
