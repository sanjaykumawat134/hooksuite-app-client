import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { UserService } from 'src/app/services/users.service';

interface UserType {
  firstName: string;
  lastName: string;
  email?: string;
  displayImage?: string;
  authProviders: string;
  authProviderUserId: string;
}
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  User: UserType;
  constructor(
    public socialAuthServive: SocialAuthService,
    public userService: UserService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.userService.linkedInProfile().subscribe((user) => {
      this.User = user;
    });
  }

  onLogoutFromLinkedIn() {
    const win = window.open(
      'https://linkedin.com/m/logout',
      'width=500,height=200,left=375,top=330'
    );
    setTimeout(function () {
      win!.close();
    }, 1000);
    this.userService.logoutFromLinkedIn().subscribe((response) => {
      localStorage.removeItem('authToken');
      this.router.navigate(['login']);
    });
  }
}
