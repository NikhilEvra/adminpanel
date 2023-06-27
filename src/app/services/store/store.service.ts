import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  getpo() {
    return this.http.get('http://localhost/api/admin/store_po_count.php');
  }
  get_store_po() {
    return this.http.get('http://localhost/api/admin/store_get_po.php');
  }

  po_2(id:any,dealerid:any,panel_id:any):Observable<any>{
    const formData = new FormData();
    formData.append('po_id', id);
    formData.append('dealerid', dealerid);
    formData.append('panel_id', panel_id);
    return this.http.post<any>(environment.apiurl + 'po_2.php', formData);

  }

}
