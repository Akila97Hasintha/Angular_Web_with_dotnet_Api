import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class StudentServicesService {
  private endpoint = 'students';

  constructor(private apiService: ApiServiceService) { }

  getStudents(): Observable<any[]> {
    return this.apiService.get(`${this.endpoint}/Index`);
  }

  getStudentById(id: number): Observable<any> {
    return this.apiService.get(`${this.endpoint}/Details/${id}`);
  }

  updateStudentDetails(student: any): Observable<any> {
    return this.apiService.put(`${this.endpoint}/${student.id}`, student);
  }
}
