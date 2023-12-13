import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiUrl = 'http://localhost:5239/api'; // Replace with your API endpoint


  constructor(private httpClient: HttpClient) { 

  }

  private getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('authToken'); // Get the token from localStorage
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });
  }

  registerUser(userData: any): Observable<any> {
    // Define the registration endpoint on your API
    const registerEndpoint = '/Admins/SignUp';

    // Make a POST request to the registration endpoint with user data
    return this.httpClient.post<any>(`${this.apiUrl}${registerEndpoint}`, userData);
  }

  loginUser(userData: any): Observable<any> {
    // Define the registration endpoint on your API
    const Endpoint = '/Admins/LogIn';

    // Make a POST request to the registration endpoint with user data
    return this.httpClient.post<any>(`${this.apiUrl}${Endpoint}`, userData);
  }

  get(endpoint: string): Observable<any> {
    
    return this.httpClient.get(`${this.apiUrl}/${endpoint}`);
    
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/${endpoint}`, data);
  }

  put(endpoint: string, data: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/${endpoint}`, data);
  }
  

}
