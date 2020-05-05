import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  url="http://localhost:3000/employee"
  constructor(private http:HttpClient) { }

  getListOfEmployee(){
   return this.http.get(this.url)
  }
  addNewEmployee(data){
   return this.http.post(this.url,data)
  }
  deleteEmployee(id){
    return this.http.delete(`${this.url}/${id}`)
  }
  getDataOfEmployee(id){
    return this.http.get(`${this.url}/${id}`)
  }
  updateDataOfEmployee(id,data){
    return this.http.put(`${this.url}/${id}`,data)
  }
}
