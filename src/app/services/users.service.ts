import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService
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
}
