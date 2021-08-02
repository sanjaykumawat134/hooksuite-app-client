import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/auth/login/login.component';
import { MainComponent } from './home/main/main.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  // },
  {
    path: 'dashboard',
    component: DashboardMainComponent, // with router link tag
    children: [
      {
        path: '',
        component: DashboardComponent, //childerens to be render
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
