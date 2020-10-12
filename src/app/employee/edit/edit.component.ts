import { Component, OnInit } from '@angular/core';
import {EmployeeService} from 'src/app/services/employee.service';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id :any;
  editForm : FormGroup;
  constructor(private service : EmployeeService,private route: ActivatedRoute) { 
    this.editForm = service.formModel;
  }
  
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id")
    if(this.id){
      this.service.getEmployeeById(this.id).subscribe(
        (res:any)=>{
          console.log(res);
          this.service.formModel.patchValue({
            Employee_ID :res.Employee_ID,
            EmployeeCode: res.EmployeeCode,
            EmployeeName: res.EmployeeName,
            EmployeeTitle: res.EmployeeTitle,
            EmployeePhone: res.EmployeePhone,
            EmployeeEmail: res.EmployeeEmail,
            DepartmentName: res.DepartmentName,
          });
        },(err)=>{
          console.log(err);
        }
      )
    }
  
  }

  onSubmit (){
    this.service.editEmployee(this.id);
  }

  
}


