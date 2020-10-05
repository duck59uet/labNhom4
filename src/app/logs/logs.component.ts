import { Component, OnInit} from '@angular/core';
// import { DataManager, WebApiAdaptor, ODataAdaptor  } from '@syncfusion/ej2-data';
// import { GridComponent } from '@syncfusion/ej2-angular-grids';
// import { HttpClient } from '@angular/common/http';
import { LogsService} from '../services/logs.service';
import { ExportService} from '../services/export.service';

// import { FormBuilder, FormGroup } from '@angular/forms';
// import { map, withLatestFrom, startWith, tap } from 'rxjs/operators';
// import { of, Observable } from 'rxjs';



// const SERVICE_URI: string = 'https://5f71806c64a3720016e60793.mockapi.io/';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent implements OnInit {

  logs = [];
  total: number = 0;
  page:number = 1;

  result:any;

  // @ViewChild('grid')
  // public grid: GridComponent;

  constructor(  
    private logsService: LogsService,
    private exportService: ExportService
    ) { 
    }

  ngOnInit(): void {
    this.getLogs();
  }

  getLogs(){
    // let result: any;
    this.logsService.getList().subscribe((res)=>{
       this.result = res;
      //  console.log(this.result);
    }, err => {
      console.log(err);
    }, () => {
      this.total = this.result.length;
      this.logs = this.result;
    });
  }

  export() {
    // this.exportService.exportExcel(this.customers, "thu");
    if(confirm('Bạn muốn xuất excel danh sách này?'))
    {
      this.exportService.exportexcel("excel-table","ExcelSheet.xlsx");
    }
  }




}
