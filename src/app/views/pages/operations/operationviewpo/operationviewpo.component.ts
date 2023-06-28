import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { OperationService } from 'src/app/services/Operation/operation.service';
import { DashService } from 'src/app/services/data/dash.service';
import { SearchserviceService } from 'src/app/services/search/searchservice.service';
import { StoreService } from 'src/app/services/store/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-operationviewpo',
  templateUrl: './operationviewpo.component.html',
  styleUrls: ['./operationviewpo.component.scss']
})
export class OperationviewpoComponent {
  po:any=[];
  idd:any=[];
  getuserdata:any=[];
  USTEMP = localStorage.getItem('user');
  res:any=[];

  form!:FormGroup;
  show = false;
  response:any=[];
  result:any=[];

  
  
  constructor(
    private route : ActivatedRoute,
    private api2 :DashService,
    private router : Router,
    private formb : FormBuilder,
    private api4 :StoreService,
    private api : SearchserviceService,
    private api5 : OperationService
 ) {
     
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
   

  

     update_po_status(){
     
      this.api5.po_3(this.idd.id,this.po[0].dealerid,this.getuserdata.id).subscribe({
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
  
         if(this.res.status == false){
          Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
         }
         else{
          Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
         }
          this.get_po();
        }
      })
     }
}
