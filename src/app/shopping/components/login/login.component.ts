import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShoppingApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formData = {
    email: 'srini@gmail.com',
    password: '123SD',
    // password:'imsrini1992'
  };

  loginForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private api: ShoppingApiService,
    private route: Router
  ) {}

  get emailControl() {
    return this.loginForm.get('email');
  }

  get passwordControls() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.minLength(5)],
      ],
      password: ['',[Validators.required,Validators.email,Validators.minLength(2),Validators.maxLength(10)]],
    });
    // this.loginForm = this.formBuilder.group({ email: '', password: '' });

    this.loginForm.patchValue(this.formData);
  }

  submit() {
    let body = this.loginForm.value;
    this.api.login(body).subscribe({
      next: (d: any) => {
        let { data } = d;
        let { token } = data;
        if (token) {
          localStorage.setItem('my-app-token', JSON.stringify(token));
          this.route.navigate(['shopping', 'dashboard']);
        }
      },
      error: (e) => {
        console.log(e);
      },
    });
  }
}
