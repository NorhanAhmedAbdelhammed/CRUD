import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service'

@Component({
  selector: 'app-list-of-employee',
  templateUrl: './list-of-employee.component.html',
  styleUrls: ['./list-of-employee.component.scss']
})
export class ListOfEmployeeComponent implements OnInit {
  // variables //

  headElements = ['ID', 'Name', 'Email', 'Phone' ,'Operations'];

  constructor(private service:EmployeesService) { }
  listOfEmployees:any = []
  ngOnInit(): void {
    this.service.getListOfEmployee().subscribe(Response=>{
      this.listOfEmployees=Response
    })
  }
  deleteEmployee(id){
    this.listOfEmployees.splice(id-1,1)
    this.service.deleteEmployee(id).subscribe(Response=>{
      console.log(Response)
    })
  }
}
