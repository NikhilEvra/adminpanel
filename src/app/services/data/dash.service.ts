import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashService {

  constructor(private http :HttpClient) { }

  getdealerCount():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/dealer_count.php');
  }
  getsaleCount():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/total_sale_count.php');
  }
  gettotalAmount():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/total_amount.php')
  }
  getPoCount():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/po_count.php');
  }
  getComplaintsCount():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/complaints_count.php');
  }
  graphdata():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/dash_graph_data.php');
  }
  dealer_list():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/get_dealer_list.php');
  }
  replacecount():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/replace_count.php');
  }
  complaintcount():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/complaints_count.php');
  }
}
