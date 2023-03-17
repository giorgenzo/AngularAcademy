import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private readonly router:Router) { }

  onLogin(form: NgForm) {
    this.email = form.value.email;
    this.password = form.value.password;
    console.log(this.email, this.password);
  }

  onRegister() {
    this.router.navigateByUrl('registrazione');
  }
}
