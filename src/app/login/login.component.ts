import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})

export class LoginComponent {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();
  loginForm: FormGroup = this.fb.group({
    
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  
  });
  

  constructor(private fb: FormBuilder,private apiService: ApiServiceService,private router: Router) {}

  

  submit() {
    // You can handle the login logic here, e.g., make an API call
 

    if (this.loginForm.valid) {
      // Log the form values
      console.log('Form submitted:',this.loginForm.value);
     // You can call your API service here or perform other actions
      this.apiService.loginUser(this.loginForm.value).subscribe(
        (response) => {
          console.log('API Response:', response);
          // You can handle the response from the API here
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/home']);
          
        },
        (error) => {
          console.error('API Error:', error);
         
          // You can handle errors from the API here
        }
      );
    }
    console.log('Form submitted:',this.loginForm.value);
  }
}
