import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface sociaMediaOptions {
  name: String;
  logo: String;
}
@Component({
  selector: 'app-addsocial',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddSocialDialogComponent implements OnInit {
  socialMediaList: sociaMediaOptions[] = [
    {
      name: 'facebook',
      logo: 'imgurl',
    },
    {
      name: 'twitter',
      logo: 'imgurl',
    },
    {
      name: 'linkedIn',
      logo: 'imgurl',
    },
  ];
  socialListGroup: FormGroup;

  constructor(fb: FormBuilder) {
    this.socialListGroup = fb.group({
      facebook: false,
      twitter: false,
      linkedIn: false,
    });
  }

  ngOnInit(): void {}
}
