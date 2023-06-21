import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
