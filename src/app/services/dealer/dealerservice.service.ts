import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DealerserviceService {

  constructor(
    private http :HttpClient
  ) { }

  get_dealer_info(id:any):Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/get_dealer_by_id.php?d_id=' + id);
  }

  updatestatus(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', id);

    return this.http.post<any>('http://localhost/api/admin/update_status_pending.php', formData);
  }

  open_complaints():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/open_complaints.php')
  }
  closed_complaints():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/closed_complaints.php')
  }

  openreplacements():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/service.php')
  }
  get_po():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/purchase_orders.php')
  }

}
