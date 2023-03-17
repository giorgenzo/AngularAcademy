import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.scss']
})
export class RegistrazioneComponent {
  username!: string;
  email!: string;
  password!: string;
  cPassword!: string;


  constructor(private readonly router: Router) { }

  register(form: NgForm) {
    this.username = form.value.username;
    this.email = form.value.email;
    this.password = form.value.password;
    this.cPassword = form.value.cPassword;
    console.log(this.email, this.password);
  }

  onLogin() {
    this.router.navigateByUrl('login');
  }
}
