import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchserviceService {

  constructor(private http : HttpClient) { }

  get_customer_list_by_invoice(invoice_id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_customer_by_invoive.php?invoice_id=' + invoice_id);
  }

  get_replacement_by_id(replacement_id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_replacement_by_id.php?replace_id=' + replacement_id);
  }
  get_po_by_po_id(po_id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'search_po_by_po_id.php?po_id=' + po_id);
  }
  get_dealer_by_id(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_dealer_by_id.php?d_id=' + id);
  }

}
