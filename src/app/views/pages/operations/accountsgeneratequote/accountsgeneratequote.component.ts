import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { SearchserviceService } from 'src/app/services/search/searchservice.service';
import { StoreService } from 'src/app/services/store/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountsgeneratequote',
  templateUrl: './accountsgeneratequote.component.html',
  styleUrls: ['./accountsgeneratequote.component.scss']
})
export class AccountsgeneratequoteComponent {
  po:any=[];
  idd:any=[];
  getuserdata:any=[];
  USTEMP = localStorage.getItem('user');

  form!:FormGroup;
  show = false;
  response:any=[];
  result:any=[];

  
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  
  constructor(
    private route : ActivatedRoute,
    private api2 :DashService,
    private router : Router,
    private formb : FormBuilder,
    private api4 :StoreService,
    private api : SearchserviceService,
 ) {
     
      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      } 
  }

  initForm(){  
    this.form = this.formb.group({    
      po_id: ['', Validators.required],
    })
  }
  onTableDataChange(event: any) {
    this.page = event;

  }
  
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    ); 
    this.initForm();
  this.getpo();
    }
    getpo(){
      this.api4.get_store_po().subscribe({
        next:(data) =>{
          if(length === 0 ){
            Swal.fire({'imageUrl' :'assets/images/empty.gif','imageHeight':'150px', 'title':'No data Found',  heightAuto: false ,  timer: 3000});
            this.router.navigateByUrl('/dashboard')
          }
          console.log(data);
          this.response = data;
        
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
          if(this.getuserdata.panel === this.response[0].company_status){
          
            // alert('yes');
          }
        }
      })
     }
  search(){
    this.api.get_po_by_po_id(this.form.value.po_id).subscribe({
      next:(data) =>{
        console.log(data);
        this.result = data;
        this.show = true;
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
    this.router.navigate(['/pages/operationsviewpo'], navigationExtras);
   }
}
