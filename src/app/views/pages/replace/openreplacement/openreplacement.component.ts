import { Component } from '@angular/core';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-openreplacement',
  templateUrl: './openreplacement.component.html',
  styleUrls: ['./openreplacement.component.scss']
})
export class OpenreplacementComponent {
  response:any=[]

 
  constructor(

    private api : DealerserviceService) {

      
  }

  ngOnInit(): void {
    this.get_openreplacement();
  }

  get_openreplacement(){
    this.api.openreplacements().subscribe({
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
