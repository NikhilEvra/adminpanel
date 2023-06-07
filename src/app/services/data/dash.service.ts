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
    return this.http.get<any>(environment.apiurl + 'dealer_count.php');
  }
  getsaleCount():Observable<any>{
    return this.http.get<any>(environment.apiurl +'total_sale_count.php');
  }
  gettotalAmount():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'total_amount.php')
  }
  getPoCount():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'po_count.php');
  }
  getComplaintsCount():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'complaints_count.php');
  }
  graphdata():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'dash_graph_data.php');
  }
  dealer_list():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_dealer_list.php');
  }
  replacecount():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'replace_count.php');
  }
  complaintcount():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'complaints_count.php');
  }

  approved_dealer_list():Observable<any>{
    return this.http.get<any>(environment.apiurl +  'approved_dealers.php');
  }

  getgraph_data():Observable<any>{
    return this.http.get<any>(environment.apiurl +  'graph_data.php');
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

  get_dealer_by_id(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'view_dealer_by_id.php?id=' + id);
  }
}
