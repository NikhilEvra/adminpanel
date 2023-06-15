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
  form2!: FormGroup;
  response:any=[];
  graphdata1:any=[];
  graphdata:any=[];

  hide= false;

  t:any=[1, 59, 84, 84, 51, 55, 40];
  constructor(private router :Router,
    private formb : FormBuilder,
    private api : LoginserviceService,
    private api2 : DashService
    ) { }

    initForm(){  
      this.form = this.formb.group({    
        phone: ['', Validators.required],
        // password: ['', Validators.required],  
  
      })

      this.form2 = this.formb.group({
        otp: ['', Validators.required],
      })
    }
    ngOnInit() {
      this.initForm(); 
      // this.dashgraph();
    
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
    this.api.getlogindata(this.form.value.phone).subscribe({
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
        //   localStorage.setItem('user',JSON.stringify(this.response[0]));
        //  this.api.menu.next(this.response);
          // this.router.navigateByUrl('/dashboard');
          Swal.fire({
              'imageUrl' :'assets/img/login.gif',
              'imageHeight':'100px', 
              'title': 'Please Enter Otp to login',
               heightAuto: false , 
               timer: 3000
              });
              this.hide= true;
              this.startTimer();
              // this.dashgraph();
                    
        }        
      }
    })
  }
  timeLeft: number = 60;
  interval:any;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)

    setTimeout(() => {
      // window.location.reload();
      clearInterval(this.interval);
      this.hide = false;
      // Swal.fire({
      //   'imageUrl' :'assets/img/lock.gif',
      //   'imageHeight':'100px', 
      //   'title': 'Timeout Regenerate Otp ',
      //    heightAuto: false , 
      //    timer: 3000
      //   });
    }, 60000);
    
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
  otp(){
    this.api.sendotp(this.form.value.phone, this.form2.value.otp).subscribe({
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
         if(this.response[0].panel == 'Accounts'){
          this.router.navigateByUrl('/pages/accountsdash')
         }else if(this.response[0].panel == 'Services'){
          this.router.navigateByUrl('/pages/servicedash')
         }else if(this.response[0].panel == 'Operations'){
          this.router.navigateByUrl('/pages/operationsdash')
         }
         else if(this.response[0].panel == 'Store'){
          this.router.navigateByUrl('/pages/storedash')
         }
          else{
            this.router.navigateByUrl('/dashboard');
          }

          Swal.fire({
              'imageUrl' :'assets/img/login.gif',
              'imageHeight':'100px', 
              'title': 'You have successfully loged in',
               heightAuto: false , 
               timer: 3000
              });
             
     
                    
        }        
      }
    })
  }
}
