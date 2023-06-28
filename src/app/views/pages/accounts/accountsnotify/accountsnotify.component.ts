import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountsService } from 'src/app/services/accounts/accounts.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accountsnotify',
  templateUrl: './accountsnotify.component.html',
  styleUrls: ['./accountsnotify.component.scss']
})
export class AccountsnotifyComponent {
  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  response:any=[];
  msg:any=[];
  
  constructor(
    private api : NotificationService,
    private api2 : AccountsService) {

  }
  ngOnInit() {
   
    this.notification();
   
  }

    onTableDataChange(event: any) {
    this.page = event;

  }
  
  notification(){
    // this.toggleToast();
    this.api2.getnoti().subscribe({
      next:(data) =>{
        // alert('yes') 
        console.log(data);
        this.response =  data;
   
      
        
        // alert(this.response2.a)
        
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        // this.toggleToast();
      }
    })
   }

   update(id:any){
    this.api2.updatestatus(id).subscribe({
      next:(data) =>{
        // alert('yes') 
        console.log(data);
        this.msg =  data;      
        Swal.fire({
          'imageUrl' :'assets/img/login.gif',
          'imageHeight':'100px', 
          'title': this.msg.message ,
           heightAuto: false ,   
           timer: 3000
          });
        // alert(this.response2.a);

      },
      error:() =>{
        alert('error');
      },
      complete:() =>{
        this.notification();
        // this.toggleToast();
      }
    })
   }

}

