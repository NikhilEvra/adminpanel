import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { SearchserviceService } from 'src/app/services/search/searchservice.service';



@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
customerList:any=[];
hide = false;
POSTS: any;
page: number = 1;
count: number = 0;
tableSize: number = 10;

form!: FormGroup;


  constructor(
    private api2 : DashService,
    private router : Router,
    private formb : FormBuilder,
    private api : SearchserviceService) {

      
  }

  initForm(){  
    this.form = this.formb.group({    
      invoice_id: ['', Validators.required],
    })

   
  }
  ngOnInit(): void {

    // this.get_dealer_list();
    this.fetchPosts();
    this.initForm();
 
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

   search(){
    this.api.get_customer_list_by_invoice(this.form.value.invoice_id).subscribe({
      next:(data) =>{
        console.log(data);
        this.customerList = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
       this.hide = true
      }
    })
   }
}
