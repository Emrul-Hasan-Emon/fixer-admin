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
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { FixerDetailsComponent } from './components/fixer-details/fixer-details.component';
import { CategoryComponent } from './components/category/category.component';
import { LocationComponent } from './components/location/location.component';
import { SliderImagesComponent } from './components/slider-images/slider-images.component';
import { ImageAddComponent } from './components/image-add/image-add.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';
import { LocationAddComponent } from './components/location-add/location-add.component';

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
    path: "task", component: TaskComponent
  },
  {
    path: "client-details", component: ClientDetailsComponent
  },
  {
    path: "task-details", component: TaskDetailsComponent
  },
  {
    path: "fixer-details", component: FixerDetailsComponent
  },
  {
    path: "category", component: CategoryComponent
  },
  {
    path: "location", component: LocationComponent
  },
  {
    path: "slider", component: SliderImagesComponent
  },
  {
    path: "image-add", component: ImageAddComponent
  },
  {
    path: "category-add", component: CategoryAddComponent
  },
  {
    path: "location-add", component: LocationAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
