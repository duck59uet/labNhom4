import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../services/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees = [];
  total: number = 0;
  page:number = 1;

  result:any;
  constructor(  
    private employeeService: EmployeeService,
 
    ) { 
    }

    ngOnInit(): void {
      this.getEmployee();
    }

    getEmployee(){
      // let result: any;
      this.employeeService.getListEmployee().subscribe((res)=>{
         this.result = res;
        //  console.log(this.result);
      }, err => {
        console.log(err);
      }, () => {
        this.total = this.result.length;
        this.employees = this.result;
      });
    }

   

}
