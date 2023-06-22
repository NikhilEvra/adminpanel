import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {


  constructor(private http :  HttpClient) { }

  getnoti() {
    return this.http.get('http://localhost/api/admin/notification.php');
  }
  getnoti_count() {
    return this.http.get('http://localhost/api/admin/notification_count.php');
  }
  updatestatus(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('id', id);

    return this.http.post<any>(environment.apiurl + 'update_notification_seen.php', formData);
  }
}
