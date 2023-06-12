import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  public menu = new BehaviorSubject([]);
  
  constructor(private api : HttpClient) { }

  getlogindata(userid: any, pass: any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'a_login.php?userid=' + userid + '&spassword=' + pass);
  }
  sendotp(phone: any, otp: any):Observable<any>{
    return this.api.get<any>(environment.apiurl + 'ff.php?phonr=' + phone + '&otp=' + otp);
  }
}
