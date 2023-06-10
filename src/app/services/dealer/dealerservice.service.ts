import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DealerserviceService {

  constructor(
    private http :HttpClient
  ) { }

  get_dealer_info(id:any):Observable<any>{
    return this.http.get<any>(environment.apiurl + 'get_dealer_by_id.php?d_id=' + id);
  }

  updatestatus(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', id);

    return this.http.post<any>(environment.apiurl + 'update_status_pending.php', formData);
  }

  open_complaints():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'open_complaints.php')
  }
  closed_complaints():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'closed_complaints.php')
  }

  openreplacements():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'service.php')
  }

  get_po():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'purchase_orders.php')
  }
  get_po_approved():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'purchase_orders_approved.php')
  }
  get_po_closed():Observable<any>{
    return this.http.get<any>(environment.apiurl + 'purchase_orders_closed.php')
  }
  add_dealer_info(d_id:any,gst:any,pan:any,bank:any,outlet_code:any,dealership_name:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id',d_id);
    formData.append('gst', gst);
    formData.append('pan', pan);
    formData.append('bank',bank);
    formData.append('outlet_code',outlet_code),
    formData.append('dealership_name',dealership_name);

    return this.http.post<any>(environment.apiurl + 'add_dealer_info.php', formData);
  }

  updatestatus_Active(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('d_id', id);

    return this.http.post<any>(environment.apiurl + 'update_status_active.php', formData);
  }

  update_complaint_status_false(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('complaint_id', id);

    return this.http.post<any>(environment.apiurl + 'update_complaint_status_closed.php', formData);
  }

  update_replace_status_Closed(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('replace_id', id);

    return this.http.post<any>(environment.apiurl + 'update_replacement_status_closed.php', formData);
  }

  update_po_status_false(id:any):Observable<any>{
    const formData = new FormData();
    formData.append('po_id', id);

    return this.http.post<any>(environment.apiurl + 'update_po_status_closed.php', formData);
  }

  update_po_status_approved(id:any,dealerid:any):Observable<any>{
    const formData = new FormData();
    formData.append('po_id', id);
    formData.append('dealerid', dealerid);
    return this.http.post<any>(environment.apiurl + 'update_po_status_approved.php', formData);

  }

}
