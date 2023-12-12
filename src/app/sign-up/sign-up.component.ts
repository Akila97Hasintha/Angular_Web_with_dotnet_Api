// sign-up.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    emailAddress: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  
  });

  constructor(private fb: FormBuilder,private apiService: ApiServiceService,private router: Router) {}
  
  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}

  submit(): void {
    // Handle form submission logic here
    if (this.signupForm.valid) {
      // Log the form values
      console.log('Form submitted:',this.signupForm.value);
      // You can call your API service here or perform other actions
      this.apiService.registerUser(this.signupForm.value).subscribe(
        (response) => {
          console.log('API Response:', response);
          // You can handle the response from the API here
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('API Error:', error);
          // You can handle errors from the API here
        }
      );
    }
  }
}
