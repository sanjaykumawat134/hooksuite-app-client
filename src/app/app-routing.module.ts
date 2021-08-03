import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/auth/login/login.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { SocialComponent } from './dashboard/dashboard-main/social/social.component';
import { ComposeComponent } from './dashboard/dashboard-main/compose/compose.component';
import { PublisherComponent } from './dashboard/dashboard-main/publisher/publisher.component';

import { StreamComponent } from './dashboard/dashboard-main/stream/stream.component';

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

  {
    path: 'dashboard',
    component: DashboardMainComponent, // with router link tag
    children: [
      {
        path: 'addsocial',
        component: SocialComponent, //childerens to be render
      },
      {
        path: 'compose',
        component: ComposeComponent,
      },
      {
        path: 'publisher',
        component: PublisherComponent,
      },
      {
        path: 'stream',
        component: StreamComponent,
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
