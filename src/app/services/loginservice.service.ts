import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public menu = new BehaviorSubject([]);
  
  constructor(private api : HttpClient) { }

  getlogindata(userid: any, pass: any):Observable<any>{
    return this.api.get<any>('http://localhost/api/admin/a_login.php?userid=' + userid + '&spassword=' + pass);
  }
}
