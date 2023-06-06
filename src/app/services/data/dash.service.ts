import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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

  approved_dealer_list():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/approved_dealers.php');
  }

  getgraph_data():Observable<any>{
    return this.http.get<any>('http://localhost/api/admin/graph_data.php');
  }

  customer_list():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_customer_list.php');
  }
  customer_list_by_id(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_customer_list_by_id.php?invoice_id=' + id);
  }

  opencomplaint(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'complaint_by_id.php?id=' + id);
  }
  openreplacement(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'view_replacement_by_id.php?id=' + id);
  }
}
