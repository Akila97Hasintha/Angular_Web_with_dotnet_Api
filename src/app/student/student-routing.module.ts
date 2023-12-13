import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentIndexComponent } from './student-index/student-index.component';



const routes: Routes = [
  {path: 'index',component: StudentIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
