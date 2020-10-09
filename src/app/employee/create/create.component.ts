import { Component, OnInit } from '@angular/core';
import { EmployeeService} from 'src/app/services/employee.service';
import { FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  createForm :FormGroup;

  constructor(private service: EmployeeService) {
    this.createForm = service.formModel;
   }

  ngOnInit() {
  }

  onSubmit() {
      this.insertRecord();
    
  }
  insertRecord() {
    this.service.createEmployee().subscribe(res => {
     
    });
  }
}
