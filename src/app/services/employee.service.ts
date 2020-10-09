import { Injectable } from '@angular/core';
import { API } from './api';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { FormBuilder, Validators } from '@angular/forms'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private api: API,
    private fb: FormBuilder,
    private httpClient: HttpClient) { }



  formModel = this.fb.group({
    EmployeeCode: ['', [Validators.required]],
    EmployeeName: ['', [Validators.required]],
    EmployeeTitle: [''],
    EmployeePhone: [''],
    EmployeeEmail: [''],
    DepartmentName: ['', [Validators.required]]
  })

  getListEmployee() {

    return this.api.get('/api/employees');
  }

  createEmployee() {

    this.api.post('/api/employees', 
     {
      'EmployeeCode': this.formModel.value.EmployeeCode,
      'EmployeeName': this.formModel.value.EmployeeName,
      'EmployeeTitle': this.formModel.value.EmployeeTitle,
      'EmployeePhone': this.formModel.value.EmployeePhone,
      'EmployeeEmail': this.formModel.value.EmployeeEmail,
      'DepartmentName': this.formModel.value.DepartmentName
    }).subscribe(
      (data: any) => {
        // Xu ly khi data tra ve thanh cong (status code = 200)
        console.log(data);
      },
      (error: any) => {
        // Xu ly khi data tra ve thanh cong (status code != 200)
      }
    );
  }


}