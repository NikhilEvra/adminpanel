import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification/notification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  response:any=[];

  constructor(
    private router : Router,

    
    private api : NotificationService) {

  }
  ngOnInit() {
   
    
    this.notification();

 
   
  }

    onTableDataChange(event: any) {
    this.page = event;

  }
  
  notification(){
    // this.toggleToast();
    this.api.getnoti().subscribe({
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


   update(){
    Swal.fire({
      'imageUrl' :'assets/img/login.gif',
      'imageHeight':'100px', 
      'title': 'Status Updated !',
       heightAuto: false , 
       timer: 3000
      });
   }
}
