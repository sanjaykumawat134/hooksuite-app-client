import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './home/main/main.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './home/auth/login/login.component';
import { SignupComponent } from './home/auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardMainComponent } from './dashboard/dashboard-main/dashboard-main.component';
import { SocialComponent } from './dashboard/dashboard-main/social/social.component';
import { PublisherComponent } from './dashboard/dashboard-main/publisher/publisher.component';
import { StreamComponent } from './dashboard/dashboard-main/stream/stream.component';
import { ComposeComponent } from './dashboard/dashboard-main/compose/compose.component';
import { AddSocialDialogComponent } from './dashboard/dashboard-main/social/add/add.component';
import { GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AuthGaurdService } from './services/AuthGuard.service';
import { UserService } from './services/users.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    DashboardMainComponent,
    SocialComponent,
    PublisherComponent,
    StreamComponent,
    ComposeComponent,
    AddSocialDialogComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true, //keeps the user signed in
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '211445314206-2n44k7oipnanbape9vgg7on79u806ogg.apps.googleusercontent.com'
            ), // your client id
          },
        ],
      },
    },
    AuthGaurdService,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
