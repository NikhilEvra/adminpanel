import { Component } from '@angular/core';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-closedcomplaints',
  templateUrl: './closedcomplaints.component.html',
  styleUrls: ['./closedcomplaints.component.scss']
})
export class ClosedcomplaintsComponent {
  response:any=[]

  constructor(
 
    private api : DealerserviceService) {

      
  }
  ngOnInit(): void {
    this.get_closed_complaints();
  }

  get_closed_complaints(){
    this.api.closed_complaints().subscribe({
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
}
