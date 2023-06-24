import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';

@Component({
  selector: 'app-storeviewpo',
  templateUrl: './storeviewpo.component.html',
  styleUrls: ['./storeviewpo.component.scss']
})
export class StoreviewpoComponent {
  po:any=[];
  idd:any=[];
  getuserdata:any=[];
  USTEMP = localStorage.getItem('user');
  constructor(
    private route : ActivatedRoute,
    private api2 :DashService,
    private router : Router) {
     
      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      } 
  }
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    ); 
this.get_po();
    }

    get_po(){
      this.api2.view_po_by_id(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.po = data;   
        


        },
        error:() =>{
          alert('error');

        },
        complete:() =>{
         
       
        }
      })
     }


}
