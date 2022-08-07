import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  };

  loginForm!: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private api: ShoppingApiService,
    private route:Router
  ) {}

  get emailControls() {
    return this.loginForm.get('email');
  }

  get passwordControls() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({ email: '', password: '' });
    // this.loginForm = this.formBuilder.group({ email: '', password: '' });


    this.loginForm.patchValue(this.formData);
  }

  submit() {
    let body = this.loginForm.value;
    this.api.login(body).subscribe({
      next:(d:any)=>{
        let {data} =  d;
        let { userId,user} = data;
        if(userId){

          localStorage.setItem("userInfo",JSON.stringify(user));
          this.route.navigate(['shopping','dashboard'])
        }
      },
      error:(e)=>{
        console.log(e)
      }
    });
  }
}
