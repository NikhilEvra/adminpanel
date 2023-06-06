import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';

@Component({
  selector: 'app-view-sales-by-id',
  templateUrl: './view-sales-by-id.component.html',
  styleUrls: ['./view-sales-by-id.component.scss']
})
export class ViewSalesByIdComponent {
idd:any=[]
customerList:any=[];
constructor(
  private api2 :DashService,
  private route : ActivatedRoute) {

    
}
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    );    


  this.get_customer_list();
 
    }

    get_customer_list(){
      this.api2.customer_list_by_id(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.customerList = data;
          
         
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
       
        }
      })
     }
}
