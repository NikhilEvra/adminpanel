import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
customerList:any=[];
  constructor(
    private api2 : DashService,
    private router : Router) {

      
  }

  ngOnInit(): void {

    this.get_dealer_list();
 
  }

  get_dealer_list(){
    this.api2.customer_list().subscribe({
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

   opendata(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/view_sales_by_id'], navigationExtras);
   }
}
