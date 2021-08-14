import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkedInAcessService } from '../services/linkedInacess.service';
import { UserService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private linkedInService: LinkedInAcessService,
    private userService: UserService
  ) {}
  linkedInToken = '';
  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
    console.log(this.linkedInToken);
    // this.userService.setAccessCode(this.linkedInToken);
    this.linkedInService.code = this.linkedInToken; //set token
    // call the linkedIn service which result call auth service for user data
    this.linkedInService.linkedInLogin().subscribe(
      (user: any) => {
        console.log(user.token);
        this.userService._linkedInUser = user.user;
        this.router.navigate(['/dashboard']).then((isNavigated) => {
          if (isNavigated) {
            // make a request base on token so we can fetch user profile
            // this.userService.linkedInProfile(user.token).subscribe((data) => {
            // localStorage.removeItem('authToken');
            localStorage.setItem('authToken', JSON.stringify(user.token));

            // });
          }
        });
      },
      (error) => {
        console.log('something happened wrong');
        this.router.navigate(['/login']);
      }
    );
  }
}
