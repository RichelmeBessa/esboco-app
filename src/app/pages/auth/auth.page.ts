import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss']
})
export class AuthPage implements OnInit {

  form: FormGroup;

  constructor(private AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'change',
        validators: [Validators.required]
      }),
      password: new FormControl(null , {
        updateOn: 'change',
        validators: [Validators.required]
      })
    });
  }

  login() {
    if (this.form.invalid) {
      return;
    }

    this.AuthService.login(this.form.value);
    this.form.reset();
    this.router.navigate([`companies`]);
  }
}