import { Component, OnInit } from '@angular/core';
import { LogsService} from '../services/logs.service';
import { ExportService} from '../services/export.service';

@Component({
  selector: 'app-log-invalids',
  templateUrl: './log-invalids.component.html',
  styleUrls: ['./log-invalids.component.scss']
})
export class LogInvalidsComponent implements OnInit {

  logs = [];
  total: number = 0;
  page:number = 1;

  result:any;

  constructor(private logsService: LogsService,
    private exportService: ExportService
    ) { }

  ngOnInit() {
    this.getLogs();
  }

  getLogs(){
    // let result: any;
    this.logsService.getListInvalid().subscribe((res)=>{
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
