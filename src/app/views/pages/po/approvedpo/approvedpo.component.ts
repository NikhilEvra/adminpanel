import { Component } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-approvedpo',
  templateUrl: './approvedpo.component.html',
  styleUrls: ['./approvedpo.component.scss']
})
export class ApprovedpoComponent {
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


  po(){
    this.api.get_po_approved().subscribe({
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
 
}
