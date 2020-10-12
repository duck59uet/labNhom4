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
<<<<<<< HEAD
         
=======
>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
        //  console.log(this.result);
      }, err => {
        console.log(err);
      }, () => {
        this.total = this.result.length;
        this.employees = this.result;
      });
    }

<<<<<<< HEAD
    delete(id){
      this.employeeService.deleteEmployee(id).subscribe((res)=>{
      this.getEmployee();
      alert("Xóa nhân viên thành công");
      },err=>{console.log(err)}
      )
    }
   
    
=======
   

>>>>>>> 0b56c2ca1c1e52db7c774c11907094d66dbe7b7b
}
