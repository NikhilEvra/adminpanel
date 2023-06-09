import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewpo',
  templateUrl: './viewpo.component.html',
  styleUrls: ['./viewpo.component.scss']
})
export class ViewpoComponent {
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];

  public visible = false;

  idd:any=[];
  po:any=[];
  res:any=[];

  constructor(
    
    private api2 :DashService,
    private route : ActivatedRoute,
    private api :DealerserviceService,
    private router : Router) {
     
      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      } 
  }
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    ); 

    this.get_po();
    
    }

    get_po(){
      this.api2.view_po_by_id(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.po = data;   
        


        },
        error:() =>{
          alert('error');

        },
        complete:() =>{
         
       
        }
      })
     }

     toggleLiveDemo() {
      this.visible = !this.visible;
    }
  
    handleLiveDemoChange(event: any) {
      this.visible = event;
    }

    update_po_status(){
      this.api.po_1(this.idd.id,this.po[0].dealerid,this.getuserdata.id).subscribe({
        next:(data) => {
          console.log(data);
          this.res = data;
          Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
        
         
        },
        error:() => {
          console.log('err');
         
           Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
           
        },
        complete:() => {
  
      //  this.router.navigateByUrl('/approvedpo')
         if(this.res.status == false){
          Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
         }
         else{
          Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
         }
          
        }
      })

      // this.api.update_po_status_approved(this.idd.id,this.po[0].dealerid).subscribe({
      //   next:(data) => {
      //     console.log(data);
      //     this.res = data;
      //     Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
        
         
      //   },
      //   error:() => {
      //     console.log('err');
         
      //      Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
           
      //   },
      //   complete:() => {
  
      //  this.router.navigateByUrl('/approvedpo')
      //    if(this.res.status == false){
      //     Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
      //    }
      //    else{
      //     Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
      //    }
          
      //   }
      // })

    }
}
