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
    EmployeeTitle: ['', [Validators.required]],
    EmployeePhone: ['', [Validators.required]],
    EmployeeEmail: ['', [Validators.required]],
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
        alert("Thêm mới nhân viên thành công");
        window.location.href='/employee';
        console.log(data);
      },
      (error: any) => {
        // Xu ly khi data tra ve thanh cong (status code != 200)
      }
    );
  }
  editEmployee(id) {

    this.api.put('/api/employees/'+id, 
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
        alert("Sửa nhân viên thành công");
        window.location.href='/employee';
        console.log(data);
      },
      (error: any) => {
        // Xu ly khi data tra ve thanh cong (status code != 200)
      }
    );
  }
  deleteEmployee(id){
   return this.api.delete('/api/employees/'+id);
  }

  getEmployeeById(id){
  return this.api.get('/api/employees/'+id);
  }

}