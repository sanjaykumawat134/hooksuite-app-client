import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { AddSocialDialogComponent } from './social/add/add.component';
import { UserService } from 'src/app/services/users.service';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-dashboard-main',
  templateUrl: './dashboard-main.component.html',
  styleUrls: ['./dashboard-main.component.css'],
})
export class DashboardMainComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    public userService: UserService,
    public socialAuthServive: SocialAuthService
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
}
