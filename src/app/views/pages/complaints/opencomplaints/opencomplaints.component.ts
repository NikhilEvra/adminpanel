import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-opencomplaints',
  templateUrl: './opencomplaints.component.html',
  styleUrls: ['./opencomplaints.component.scss']
})
export class OpencomplaintsComponent {
  response:any=[]

  constructor(
    private router : Router,
    private api : DealerserviceService) {

      
  }
  ngOnInit(): void {
    this.get_open_complaints();
  }

  get_open_complaints(){
    this.api.open_complaints().subscribe({
      next:(data) =>{
        console.log(data);
        this.response = data;
        
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }
   
   view_complaint(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/viewcomplaint'], navigationExtras);
   }
}
