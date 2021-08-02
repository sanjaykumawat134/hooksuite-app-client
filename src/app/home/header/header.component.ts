import { Component, OnDestroy, OnInit } from '@angular/core';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(public mediaObs: MediaObserver, private router: Router) {}
  mediaSub: Subscription;
  deviceXs: boolean;
  ngOnInit(): void {
    this.mediaSub = this.mediaObs.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias == 'xs' ? true : false;
      console.log(this.deviceXs);
    });
  }
  onNavigateToLogin() {
    this.router.navigate(['login']);
  }
  onNavigateToSignUp() {
    this.router.navigate(['/signup']);
  }
  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
