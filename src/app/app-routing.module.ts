import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { StudentIndexComponent } from './student/student-index/student-index.component';

const routes: Routes = [
 // Default route, redirect to login
 
 
 { path: 'signup', component: SignUpComponent },
 { path: 'login', component: LoginComponent },
 { path: 'home', component: HomeComponent },
 {path:'student/index',component: StudentIndexComponent},
 { path: '', redirectTo: '/Home', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
