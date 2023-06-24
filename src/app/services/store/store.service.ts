import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

}
