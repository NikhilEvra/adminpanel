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

  getlogindata(phone: any):Observable<any>{
    // return this.api.get<any>(environment.apiurl + 'a_login.php?userid=' + userid + '&spassword=' + pass);
    const formData = new FormData();
    formData.append('phone', phone);

    return this.api.post<any>(environment.apiurl + 'admin_otp.php', formData);
  }
  sendotp(phone: any, otp: any):Observable<any>{
    // const formData = new FormData();
    // formData.append('phone', phone);
    // formData.append('otp', otp);

    // return this.api.post<any>(environment.apiurl + 'validate_admin_otp.php', formData);
      return this.api.get<any>(environment.apiurl + 'validate_admin_otp.php?phone=' + phone + '&otp=' + otp);
  }
}
