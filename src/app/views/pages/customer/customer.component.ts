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

POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 10;


  constructor(
    private api2 : DashService,
    private router : Router) {

      
  }

  ngOnInit(): void {

    this.get_dealer_list();
    this.fetchPosts()
 
  }
  fetchPosts(): void {
    this.api2.customer_list().subscribe(
      (response) => {
        this.POSTS = response;
        console.log(response);
        this.page = 1;
        
 
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onTableDataChange(event: any) {
    this.page = event;
    // this.fetchPosts();
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
