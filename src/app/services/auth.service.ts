import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = false

  constructor() { }

  login() {
    this.auth = true
  }
}
