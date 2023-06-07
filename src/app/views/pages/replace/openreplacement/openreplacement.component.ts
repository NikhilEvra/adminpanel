import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-openreplacement',
  templateUrl: './openreplacement.component.html',
  styleUrls: ['./openreplacement.component.scss']
})
export class OpenreplacementComponent {
  response:any=[];
  response2:any=[];

 
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

   update(id:any){
    this.api.update_replace_status_Closed(id).subscribe({
      next:(data) => {
        console.log(data);
        this.response2 = data;
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.response2.message,  heightAuto: false ,  timer: 3000});
        // this.router.navigateByUrl('/dashboard')
       
      },
      error:() => {
        console.log('err');
       
         Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
         
      },
      complete:() => {
       this.get_openreplacement();
       if(this.response2.status == false){
        Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': this.response2.message,  heightAuto: false ,  timer: 3000});
       }
       else{
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.response2.message,  heightAuto: false ,  timer: 3000});
       }
        
      }
    })  
   }
}
