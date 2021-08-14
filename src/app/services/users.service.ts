import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  FacebookLoginProvider,
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService implements OnInit {
  _linkedInUser: any;

  constructor(
    private router: Router,
    private socialAuthService: SocialAuthService,
    private http: HttpClient
  ) {}
  ngOnInit() {}
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
      'https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=86ha305jbm3ucp&scope=r_liteprofile+w_member_social+r_emailaddress&state=123456&redirect_uri=http://localhost:4200/linkedInLogin';
  }

  linkedInProfile(): Observable<any> {
    const authtoken = localStorage.getItem('authToken');
    return this.http.get('/api/linkedIn/profile', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
    });
  }

  // setAccessCode(codeStr: string) {
  //   console.log(this.code);
  //   this.code = codeStr;
  // }
  // getAccessCode() {
  //   return this.code;
  // }
  set linkedInUser(value: any) {
    this._linkedInUser = value;
  }
  get linkedInUser() {
    return this._linkedInUser;
  }

  logoutFromLinkedIn() {
    const authtoken = localStorage.getItem('authToken');
    console.log(authtoken);
    return this.http.get('/api/linkedIn/logout', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authtoken}`,
      },
    });
  }

  postSimpleShareToLinkedIn(fd: string) {
    const authtoken = localStorage.getItem('authToken');
    return this.http.post(
      '/api/linkedIn/simpleshare',
      { content: fd },
      {
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      }
    );
  }
  postMediaToLinkedIn(fd: FormData) {
    const authtoken = localStorage.getItem('authToken');
    return this.http.post('/api/linkedIn/shares', fd, {
      headers: {
        Authorization: `Bearer ${authtoken}`,
      },
    });
  }
}
