import { Component, OnInit } from '@angular/core';
import { StudentServicesService } from '../../student-services.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  
})
export class StudentIndexComponent implements OnInit {
  students: any[];
  private dataSubscription: Subscription;

  constructor(private studentServise: StudentServicesService) {
    this.students = [];
    this.dataSubscription = this.studentServise.getStudents().subscribe((students) => {
      this.students = students;
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    // Unsubscribe from data changes to prevent memory leaks
    this.dataSubscription.unsubscribe();
  }

  editStudent(student: any): void {
    // Implement logic to handle edit action
    console.log('Edit student:', student);
  }

  deleteStudent(student: any): void {
    // Implement logic to handle delete action
    console.log('Delete student:', student);
  }

  viewDetails(student: any): void {
    // Implement logic to handle view details action
    console.log('View details:', student);
  }

}
