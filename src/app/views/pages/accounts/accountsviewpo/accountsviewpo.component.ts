import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountsviewpo',
  templateUrl: './accountsviewpo.component.html',
  styleUrls: ['./accountsviewpo.component.scss']
})
export class AccountsviewpoComponent {
  form!: FormGroup;
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];

  public visible = false;

  idd:any=[];
  po:any=[];
  res:any=[];

  constructor(
    
    private api2 :AccountsService,
    private route : ActivatedRoute,
    private api :DealerserviceService,
    private router : Router,
    private formb : FormBuilder) {
     
      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      } 
  }
  initForm(){  
    this.form = this.formb.group({    
 
      file:['',Validators.required],
   
      remarks:['',Validators.required]
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
    this.get_po();
    
    }

    get_po(){
      this.api2.accounts_view_po_by_id(this.idd.id).subscribe({
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
      this.api2.po_4(this.idd.id,this.po[0].dealerid,this.getuserdata.id,this.form.value.file).subscribe({
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
          this.router.navigateByUrl('/pages/accounts/poapproval');
         }
          
        }
      })


    }

    uploadPhoto(fileChangeEvent : any) {

      const photo = fileChangeEvent.target.files[0];
      console.log(photo);
      this.form.get('file')?.setValue(photo);

    }
}
