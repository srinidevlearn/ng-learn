import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { delay } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData = {
    email:'eve.holt@reqres.in',
    password:'cityslicka'
  }

  loginForm!:FormGroup

  constructor(private api:ApiService,public formBuilder:FormBuilder) { 

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({email:'',password:''})

    // setTimeout(() => {
      this.loginForm.patchValue(this.formData);
      // }, 5 *1000);
    }
    
    
    submit(){
      
      this.api.login(this.loginForm.value).subscribe()
      this.api.login(this.loginForm.value).subscribe()
      this.api.login(this.loginForm.value).subscribe()
      this.api.login(this.loginForm.value).subscribe()
      this.api.login(this.loginForm.value).subscribe()
      this.api.latestData.pipe(delay(1000)).subscribe(console.log)

    //.subscribe()
    // console.log(this.loginForm.value)
  }
}



