import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http : HttpClient) { }

  get_operation_po() {
    return this.http.get('http://localhost/api/admin/operation_get_po.php');
  }

  po_3(id:any,dealerid:any,panel_id:any):Observable<any>{
    const formData = new FormData();
    formData.append('po_id', id);
    formData.append('dealerid', dealerid);
    formData.append('panel_id', panel_id);
    return this.http.post<any>(environment.apiurl + 'po_3.php', formData);

  }
}
