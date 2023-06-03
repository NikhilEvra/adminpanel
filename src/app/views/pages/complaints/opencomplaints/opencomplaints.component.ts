import { Component } from '@angular/core';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-opencomplaints',
  templateUrl: './opencomplaints.component.html',
  styleUrls: ['./opencomplaints.component.scss']
})
export class OpencomplaintsComponent {
  response:any=[]

  constructor(
 
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
   
}
