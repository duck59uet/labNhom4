import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  constructor(private api:API) { }

  getList(){
    return this.api.get('/api/Logs');
  }
  
  getListInvalid(){
    return this.api.get('/api/Loginvalids');
  }
}
