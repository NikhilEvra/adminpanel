import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http : HttpClient) { }

  getnoti() {
    return this.http.get(environment.apiurl + 'accounts_notify.php');
  }

  getnoti_count() {
    return this.http.get(environment.apiurl + 'accounts_notify_count.php');
  }
  
  updatestatus(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('id', id);

    return this.http.post<any>(environment.apiurl + 'accounts_update_notification_seen.php', formData);
  }
}
