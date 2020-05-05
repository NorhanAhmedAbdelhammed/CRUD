import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
//  variables //
  newEmployee = {
    name:"",
    phone:0,
    email:"",
    password:"",
    image:""
  }

  checkedImageFile:boolean =false; 
  alert:boolean = false;
  name:any;
  phone:any;
  email:any;
  password:any;

  selectedFile = null;
 
  myForm: FormGroup;
  
  constructor(private fb: FormBuilder,
              private service:EmployeesService,
              private router: Router) {}

  ngOnInit() {
  this.myForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(/^[a-z]+\w*\@[a-z]+\.com$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]]
  });     
  // get some html elemnts by id
   this.name=document.getElementById('name')
   this.password=document.getElementById('password')
   this.email=document.getElementById('email')
   this.phone=document.getElementById('phone')
  }

  fileSelected(event){
    this.selectedFile=event.target.files[0]
    this.checkedImageFile=true
    console.log(event)
  }
  onSubmit(){
    if(this.checkedImageFile){
    this.newEmployee.name=this.name.value
    this.newEmployee.email=this.email.value
    this.newEmployee.password=this.password.value
    this.newEmployee.phone=this.phone.value
    this.newEmployee.image=this.selectedFile.name
    // console.log(this.newEmployee)
    this.service.addNewEmployee(this.newEmployee).subscribe(result=>{
      console.log(result)
    })
    this.alert=true
    }
  }
  closeAlert() {
    this.alert=false
    this.name.value=""
    this.email.value=""
    this.password.value=""
    this.phone.value=""
  }

}
