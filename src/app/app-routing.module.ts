import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component'
import { UpdateEmployeeComponent } from './update-employee/update-employee.component'
import { ListOfEmployeeComponent } from './list-of-employee/list-of-employee.component'


const routes: Routes = [
  {
    component:AddEmployeeComponent,
    path:"add"
  },
  {
    component:UpdateEmployeeComponent,
    path:"update/:id"
  },
  {
    component:ListOfEmployeeComponent,
    path:"listOfEmployee"
  },
  {
    component:ListOfEmployeeComponent,
    path:""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
