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
<<<<<<< HEAD
    EmployeeTitle: ['', [Validators.required]],
    EmployeePhone: ['', [Validators.required]],
    EmployeeEmail: ['', [Validators.required]],
=======
    EmployeeTitle: [''],
    EmployeePhone: [''],
    EmployeeEmail: [''],
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
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
<<<<<<< HEAD
        alert("Thêm mới nhân viên thành công");
        window.location.href='/employee';
=======
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
        console.log(data);
      },
      (error: any) => {
        // Xu ly khi data tra ve thanh cong (status code != 200)
      }
    );
  }
<<<<<<< HEAD
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
=======

>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b

}