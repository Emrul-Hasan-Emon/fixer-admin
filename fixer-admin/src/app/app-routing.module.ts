import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { NewFixersComponent } from './components/new-fixers/new-fixers.component';
import { RegisteredFixersComponent } from './components/registered-fixers/registered-fixers.component';
import { TaskComponent } from './components/task/task.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

const routes: Routes = [
  {
    path: "", component: WelcomeComponent
  },
  {
    path: "welcome", component: WelcomeComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "clients", component: ClientsComponent
  },
  {
    path: "new-fixers", component: NewFixersComponent
  },
  {
    path: "approved-fixers", component: RegisteredFixersComponent
  },
  {
    path: "tasks", component: TaskComponent
  },
  {
    path: "client-details", component: ClientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
