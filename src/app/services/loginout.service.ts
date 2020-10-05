import { Injectable } from '@angular/core';
import { API } from './api';

@Injectable({
  providedIn: 'root'
})
export class LoginoutService {

  constructor(    private api:API) { }

  getList(){
    return this.api.get('/api/Logs');
  }
}
