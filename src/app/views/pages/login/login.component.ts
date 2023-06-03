import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form! :FormGroup;
  response:any=[];
  graphdata1:any=[];
  graphdata:any=[];
  t:any=[1, 59, 84, 84, 51, 55, 40];
  constructor(private router :Router,
    private formb : FormBuilder,
    private api : LoginserviceService,
    private api2 : DashService
    ) { }

    initForm(){  
      this.form = this.formb.group({    
        phone: ['', Validators.required],
        password: ['', Validators.required],  
  
      })
    }
    ngOnInit() {
      this.initForm(); 
      this.dashgraph();
    
    }
    dashgraph(){
      this.api2.graphdata().subscribe({
        next:(data) =>{
          // alert('yes')
          console.log(data);
          this.graphdata1 = data;
          
          // alert(this.response2.a)
          
        },
        error:() =>{
          alert('error');
       
        },
        complete:() =>{
          this.graphdata = this.graphdata1[0];
          localStorage.setItem('graph',this.t);
        }
      })
     }
  dash(){
    // this.router.navigateByUrl('/dashboard');
    this.api.getlogindata(this.form.value.phone, this.form.value.password).subscribe({
      next:(data) =>{
        console.log(data);
        this.response = data;
       
      },
      error:() =>{
     
        // alert('error occured');
        Swal.fire({
          'imageUrl' :'assets/img/login.gif',
          'imageHeight':'100px', 
          'title': 'Internal Server Error',
           heightAuto: false , 
           timer: 3000
          });
      },
      complete:() =>{
     
        if(this.response.status == false){
           Swal.fire({
              'imageUrl' :'assets/img/lock.gif',
              'imageHeight':'100px', 
              'title': this.response.message,
               heightAuto: false , 
               timer: 3000
                 });
        }
        else{
          localStorage.setItem('user',JSON.stringify(this.response[0]));
         this.api.menu.next(this.response);
          this.router.navigateByUrl('/dashboard');
          Swal.fire({
              'imageUrl' :'assets/img/login.gif',
              'imageHeight':'100px', 
              'title': 'You have successfully loged in',
               heightAuto: false , 
               timer: 3000
              });
              this.dashgraph();
                    
        }        
      }
    })
  }


}
