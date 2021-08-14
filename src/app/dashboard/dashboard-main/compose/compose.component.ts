import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/users.service';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
})
export class ComposeComponent implements OnInit {
  imgsrc: string;
  myForm = new FormGroup({
    content: new FormControl('', [Validators.required]),
    file: new FormControl(''),
  });
  uploadFile: File;
  isReadyToPublish = false;
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}
  @ViewChild('fileInput') fileInputField: ElementRef;

  ngOnInit(): void {}

  onPublishHandler(form: any) {
    const content = form.content;
    const fd = new FormData();
    if (this.uploadFile === undefined || this.uploadFile == null) {
      // fd.append('message', content);
      console.log('no file attached');
      this.userService
        .postSimpleShareToLinkedIn(content)
        .subscribe((response) => {
          if (response) {
            //show snackbar
            this._snackBar.open('posted successfully', 'ok');
            this.reset();
          }
        });
    }
    if (this.uploadFile !== undefined) {
      console.log('file attached');
      fd.append('message', content);
      fd.append('file', this.uploadFile);
      this.userService.postMediaToLinkedIn(fd).subscribe((resposne) => {
        if (resposne) {
          this._snackBar.open('posted successfully', 'ok');
          this.reset();
        }
      });
    }
  }
  onFileChange(event: any) {
    // console.log('on file change called');
    const reader = new FileReader();
    // const eventAlias = event.target as HTMLInputElement;
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      this.uploadFile = file;
      console.log(this.uploadFile);
      // console.log(file);
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgsrc = reader.result as string;
      };
    }
  }
  reset() {
    this.fileInputField.nativeElement.value = '';
    this.imgsrc = '';
  }
}
