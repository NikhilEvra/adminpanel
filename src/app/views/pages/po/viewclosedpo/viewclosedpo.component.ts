import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-viewclosedpo',
  templateUrl: './viewclosedpo.component.html',
  styleUrls: ['./viewclosedpo.component.scss']
})
export class ViewclosedpoComponent {
  public visible = false;
   myfun = false;
  idd:any=[];
  po:any=[];
  res:any=[];
  constructor(
    private api2 :DashService,
    private route : ActivatedRoute,
    private api :DealerserviceService,
    private router : Router) {
      
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

  
}
