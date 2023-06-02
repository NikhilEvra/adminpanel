import { Component } from '@angular/core';
import { DashService } from 'src/app/services/data/dash.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
dealerList:any=[];
  constructor(
    private api2 : DashService) {

      
  }

  ngOnInit(): void {

    this.get_dealer_list();
 
  }

  get_dealer_list(){
    this.api2.dealer_list().subscribe({
      next:(data) =>{
        console.log(data);
        this.dealerList = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }
}
