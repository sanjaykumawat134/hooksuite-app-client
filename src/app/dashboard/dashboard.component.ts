import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  linkedInToken = '';
  ngOnInit() {
    this.linkedInToken = this.route.snapshot.queryParams['code'];
    console.log(this.linkedInToken);
  }
}
