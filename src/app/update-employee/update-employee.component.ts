import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router'
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  //  variables //
  newEmployee = {
    name: "",
    phone: 0,
    email: "",
    password: "",
    image: ""
  }

  checkedImageFile: boolean = false;
  alert: boolean = false;
  name: any;
  phone: any;
  email: any;
  password: any;

  selectedFile = null;
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
    private service: EmployeesService,
    private router: ActivatedRoute,
    private rout:Router) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z]+\w*\@[a-z]+\.com$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]]
    });
    // get id 
    this.service.getDataOfEmployee(this.router.snapshot.params.id).subscribe(result => {
      console.log(result)
      this.myForm = this.fb.group({
        name: [result['name'], Validators.required],
        email: [result['email'], [Validators.required, Validators.pattern(/^[a-z]+\w*\@[a-z]+\.com$/)]],
        password: [result['password'], [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$/)]],
        phone: [result['phone'], [Validators.required, Validators.pattern(/^01[0-9]{9}$/)]]
      });
    })
      // get some html elemnts by id
      this.name = document.getElementById('name')
      this.password = document.getElementById('password')
      this.email = document.getElementById('email')
      this.phone = document.getElementById('phone')
  }

  onSubmit() {
    this.newEmployee.name=this.name.value
    this.newEmployee.email=this.email.value
    this.newEmployee.password=this.password.value
    this.newEmployee.phone=this.phone.value
    this.service.updateDataOfEmployee(this.router.snapshot.params.id,this.newEmployee).subscribe(result=>{
      console.log(result)
    })
  }
  closeAlert() {
    this.alert = false
  }

}
