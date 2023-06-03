import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-accountapproval',
  templateUrl: './accountapproval.component.html',
  styleUrls: ['./accountapproval.component.scss']
})
export class AccountapprovalComponent {

  response:any=[];
  idd:any=[];
  response2:any=[]
  form! : FormGroup
  constructor(private router :Router,
    private formb : FormBuilder,
    private api : DealerserviceService,
    private route : ActivatedRoute
  
    ) { }

    initForm(){  
      this.form = this.formb.group({    
        dealer_id:[this.idd.id,Validators.required],
        user_t:[this.response2.user_type,Validators.required],
        // status:['',Validators.required],
        gst:['',Validators.required],
        pan:['',Validators.required],
        bank:['',Validators.required],
      })
    }

    submit(){
  
      console.log(this.form.value);  
      // this.api.complaintsformdata(this.form.value.name,this.form.value.location,this.form.value.designation,this.form.value.topic,this.form.value.remark,this.form.value.filename,this.form.value.file).subscribe({
      //   next:(data) => {
      //     console.log(data);
      //     this.response = data;
      //     Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': this.response.message,  heightAuto: false ,  timer: 3000});
      //     this.router.navigateByUrl('/dashboard');
      //   },
      //   error:() => {
      //     console.log('err');
         
      //      Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
           
      //   },
      //   complete:() => {
      //      Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': this.response.message,  heightAuto: false ,  timer: 3000});
      //   }
      // })
     }

    ngOnInit() {
   
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    );    
  
    this.dealer_info();
    this.initForm();
    }

    dealer_info(){
      this.api.get_dealer_info(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.response = data;
       
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
       this.response2= this.response[0]
        }
      })
     }

}
