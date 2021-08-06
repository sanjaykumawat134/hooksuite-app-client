import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}
  linkedInToken = '';
  ngOnInit(): void {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
    console.log(this.linkedInToken);
  }
  onLogin(frmValue: NgForm) {
    console.log(frmValue);
  }

  onLoginWithGoogle() {
    this.userService.loginWithGoogle();
  }
  onLogoutFromGoogle() {
    this.userService.logoutfromGoogle();
  }
  onLoginWithFacebook() {
    this.userService.logInWithFacebook();
  }
  onLoginWithLinkedIn() {
    this.userService.logInWithLinkedIn();
  }
}
