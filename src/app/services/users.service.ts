import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  linkedInCredentials = {
    clientId: '86ha305jbm3ucp',
    redirectUrl: 'https://localhost:4200/login',
    scope: 'r_liteprofile%20r_emailaddress',
  };
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private http: HttpClient
  ) {}

  loginWithGoogle() {
    this.socialAuthService
      .signIn(GoogleLoginProvider.PROVIDER_ID)
      .then((value) => {
        console.log(value);
        this.router.navigate(['dashboard']);
      })
      .catch((error) => {
        console.log(error);
      });
    this.socialAuthService.authState.subscribe((user: SocialUser) =>
      console.log(user)
    );
  }
  logoutfromGoogle() {
    this.socialAuthService.signOut().then((value) => {
      this.router.navigate(['login']);
    });
  }
  logInWithFacebook() {
    this.socialAuthService
      .signIn(FacebookLoginProvider.PROVIDER_ID)
      .then((value) => {
        console.log(value);
        this.router.navigate(['dashboard']);
      })
      .catch((error) => console.log(error));
  }

  logInWithLinkedIn() {
    window.location.href =
      'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86ha305jbm3ucp&scope=r_liteprofile+w_member_social+r_emailaddress&state=123456&redirect_uri=https://localhost:4200/dashboard';
  }
}
