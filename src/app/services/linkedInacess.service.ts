import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LinkedInAcessService {
  private _code: string = '';
  constructor(private http: HttpClient) {}

  set code(value: string) {
    this._code = value;
    console.log(this._code);
  }
  get code() {
    return this._code;
  }

  linkedInLogin() {
    return this.http.post('/api/linkedIn/auth', { code: this._code });
  }
}
