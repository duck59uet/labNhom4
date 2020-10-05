import { Injectable } from '@angular/core';
import { API } from './api';
import * as XLSX from 'xlsx'; 

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor( private api:API) { }

  getList(){
    return this.api.get('/api/Logs');
  }

  exportexcel(tablename: string,filename: string): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById(tablename); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, filename);
			
    }
}
