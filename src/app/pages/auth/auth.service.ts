import { Injectable } from "@angular/core";
import { User } from './auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private mAuthenticated = false;

  get authenticated() {
    return this.mAuthenticated;
  }

  login(user: User) {
    if (user.username === 'farmacia' && user.password === 'admin') {
      this.mAuthenticated = true;
    }
  }

  logout() {
    this.mAuthenticated = false;
  }
}