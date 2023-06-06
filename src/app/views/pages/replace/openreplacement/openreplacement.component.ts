import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-openreplacement',
  templateUrl: './openreplacement.component.html',
  styleUrls: ['./openreplacement.component.scss']
})
export class OpenreplacementComponent {
  response:any=[]

 
  constructor(
    private api : DealerserviceService,
    private router : Router) {

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

   view_replacement(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/viewreplacement'], navigationExtras);
   }

}
