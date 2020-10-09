import { Injectable } from '@angular/core';
import { API } from './api';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormBuilder, Validators } from '@angular/forms'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private api:API,private fb:FormBuilder) { }



  formModel = this.fb.group({
    EmployeeCode: ['', [Validators.required]],
    EmployeeName: ['', [Validators.required]],
    EmployeeTitle: [''],
    EmployeePhone: [''],
    EmployeeEmail: [''],
    DepartmentName: ['', [Validators.required]]
  })

  getListEmployee(){
    return this.api.get('/api/employees');
  }

  createEmployee(){
    var body={
      EmployeeCode: this.formModel.value.EmployeeCode,
      EmployeeName: this.formModel.value.EmployeeName,
      EmployeeTitle: this.formModel.value.EmployeeTitle,
      EmployeePhone: this.formModel.value.EmployeePhone,
      EmployeeEmail: this.formModel.value.EmployeeEmail,
      DepartmentName: this.formModel.value.DepartmentName,
    }
    return this.api.post('/api/employees',body);
  }

  
}