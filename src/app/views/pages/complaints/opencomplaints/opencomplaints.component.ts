import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-opencomplaints',
  templateUrl: './opencomplaints.component.html',
  styleUrls: ['./opencomplaints.component.scss']
})
export class OpencomplaintsComponent {
  response:any=[];
  response2:any=[];

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
   update_status(id:any){
    this.api.update_complaint_status_false(id).subscribe({
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
       this.get_open_complaints();
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
