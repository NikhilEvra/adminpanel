import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newregestration',
  templateUrl: './newregestration.component.html',
  styleUrls: ['./newregestration.component.scss']
})
export class NewregestrationComponent {
  res:any=[];
  dealerList:any=[];
  myfun = false;
  page:any=[];
  constructor(
    private api2 : DashService,
    private api3 : DealerserviceService,
    private router : Router
) {

  }

  ngOnInit() {
    this.get_dealer_list();
    for ( this.page  = 0; this.page <= 10; this.page++) {
      console.log ( this.page);
      
    }
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

   land(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/dealerapproval'], navigationExtras);
   }
   update(id :any){
    this.api3.updatestatus_Active(id).subscribe({
      next:(data) => {
        console.log(data);
        this.res = data;
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
        // this.router.navigateByUrl('/dashboard')
       
      },
      error:() => {
        console.log('err');
       
         Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
         
      },
      complete:() => {
       this.get_dealer_list();
       
       if(this.res.status == false){
        Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
       }
       else{
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
       }
        
      }
    })  
  }
  
}
