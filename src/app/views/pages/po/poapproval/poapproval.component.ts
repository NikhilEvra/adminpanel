import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalModule } from '@coreui/angular';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poapproval',
  templateUrl: './poapproval.component.html',
  styleUrls: ['./poapproval.component.scss']
})
export class PoapprovalComponent {
  res:any=[];
  response:any=[];
  idd:any=[];
  public visible = false;
  constructor(private router : Router,
    private route: ActivatedRoute,
    private api : DealerserviceService,
  ) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    );  
    this.po();
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  po(){
    this.api.get_po().subscribe({
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

 
   view_po(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/viewpo'], navigationExtras);
   }
   update_po_status(id:any){
    this.api.update_po_status_false(id).subscribe({
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
     this.po();
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
