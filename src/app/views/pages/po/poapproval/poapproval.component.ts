import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalModule } from '@coreui/angular';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { SearchserviceService } from 'src/app/services/search/searchservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-poapproval',
  templateUrl: './poapproval.component.html',
  styleUrls: ['./poapproval.component.scss']
})
export class PoapprovalComponent {
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

  public visible = false;
  constructor( 
    private router : Router,
    private route: ActivatedRoute,
    private api : DealerserviceService,
    private api2 : SearchserviceService,
    private formb :FormBuilder,
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
    this.po();
    this.initForm();

   
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
        if(data.length === 0 ){
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
          this.show = true;
          // alert('yes');
        }
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

   onTableDataChange(event: any) {
    this.page = event;

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
