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

  get_accounts_po() {
    return this.http.get(environment.apiurl + 'accounts_get_po.php');
  }
  get_po_by_po_id(po_id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'accounts_search_po_by_po_id.php?po_id=' + po_id);
  }
  
  accounts_view_po_by_id(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'accounts_view_po_by_id.php?po_id=' + id);
  }

  

  po_4(id:any,dealerid:any,panel_id:any,file:any):Observable<any>{
    const formData = new FormData();
    formData.append('po_id', id);
    formData.append('dealerid', dealerid);
    formData.append('panel_id', panel_id);
    formData.append('file', file);
    return this.http.post<any>(environment.apiurl + 'po_4.php', formData);

  }

}
