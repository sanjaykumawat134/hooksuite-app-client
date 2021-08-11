import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddSocialDialogComponent } from './social/add/add.component';
import { UserService } from 'src/app/services/users.service';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  User: any;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public userService: UserService,
    public socialAuthServive: SocialAuthService,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  openAddSocialDialog() {
    const dialogRef = this.dialog.open(AddSocialDialogComponent, {
      width: '500px',
      height: '500px',
    });
  }

  logout() {
    this.userService.logoutfromGoogle();
  }
  ngOnInit() {
    console.log(this.route.snapshot.queryParams['code']);
    this.socialAuthServive.authState.subscribe((socialUser: SocialUser) => {
      if (socialUser) {
        this._snackBar.open('Succesffully logged In !', 'Ok', {
          duration: 3000,
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      }
    });
    this.User = this.userService._linkedInUser;
    console.log(this.User);

    // const data = this.userService.linkedInProfile();
    // console.log(data);
    const token = localStorage.getItem('authToken');
    console.log(token);
  }
}
