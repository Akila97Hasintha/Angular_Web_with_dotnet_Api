import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentServicesService } from '../../student-services.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit{
  student: any;
  
  studentId: number = 0;
  constructor(private route: ActivatedRoute, private studentService: StudentServicesService) {
    
  }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.studentId = +params['id'];

      if (!isNaN(this.studentId) && this.studentId > 0) {
        this.studentService.getStudentById(this.studentId).subscribe(student => {
          this.student = student;
        });
      } else {
        console.error('Invalid student ID:', params['id']);
        // Handle the case where the ID is not a valid number
      }
    });
  }
  

}
