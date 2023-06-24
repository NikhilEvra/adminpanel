import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { SearchserviceService } from 'src/app/services/search/searchservice.service';
import { StoreService } from 'src/app/services/store/store.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-storepoapproval',
  templateUrl: './storepoapproval.component.html',
  styleUrls: ['./storepoapproval.component.scss']
})
export class StorepoapprovalComponent {
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];

  result:any=[];
  hide = false;
  form!:FormGroup;
  
  res:any=[];
  response:any=[];
  idd:any=[];

  show = false;

  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  constructor( 
    private router : Router,
    private route: ActivatedRoute,
    private api : DealerserviceService,
    private api2 : SearchserviceService,
    private formb :FormBuilder,
    private api4 : StoreService
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

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    );  
   
    this.initForm();
    this.po();   
  }

  onTableDataChange(event: any) {
    this.page = event;

  }

  view_po(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/storeviewpo'], navigationExtras);
   }

   po(){
    this.api4.get_store_po().subscribe({
      next:(data) =>{
        // if(data.length === 0 ){
        //   Swal.fire({'imageUrl' :'assets/images/empty.gif','imageHeight':'150px', 'title':'No data Found',  heightAuto: false ,  timer: 3000});
        //    this.router.navigateByUrl('/dashboard')
        // }
        console.log(data);
        this.response = data;
      
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        if(this.getuserdata.panel === this.response[0].company_status){
          this.show = true;
          // alert('yes');
        }
      }
    })
   }
   
   search(){
    this.api2.get_po_by_po_id(this.form.value.po_id).subscribe({
      next:(data) =>{
        console.log(data);
        this.result = data;
        this.hide = true;
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{

      }
    })
   }

}
