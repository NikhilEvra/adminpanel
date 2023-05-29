import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private router :Router,
    private formb : FormBuilder,
    private api : LoginserviceService
    ) { }

    initForm(){  
      this.form = this.formb.group({    
        phone: ['', Validators.required],
        password: ['', Validators.required],  
  
      })
    }
    ngOnInit() {
      this.initForm(); 
    
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
                    
        }        
      }
    })
  }
}
