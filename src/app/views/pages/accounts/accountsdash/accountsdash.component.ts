import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { AccountsService } from 'src/app/services/accounts/accounts.service';

@Component({
  selector: 'app-accountsdash',
  templateUrl: './accountsdash.component.html',
  styleUrls: ['./accountsdash.component.scss']
})
export class AccountsdashComponent {
  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', subtitle: ''});
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];

  dealerList:any=[];
  response4:any=[];
  replace:any=[];
  response6:any=[];

  response:any=[];

  response2:any=[];
  position = 'top-end';
  visible = false;
  percentage = 0;
  
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  constructor(
    private router : Router,
    private api : NotificationService,
    private api2 : DashService,
    private api3 : DealerserviceService,
    private api4 : AccountsService
    ) {

      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      }
  }
  ngOnInit() {
   this.get_service_count();
   this.po_count();
   this.po_count_closed();
   this.get_dealer_list();
   this.notification2();
   this.notification();
    
    this.slides[0] = {
      id: 0,
      src: 'assets/images/13.png',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/images/14.png',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
      
  }

  notification(){
    this.api4.getnoti_count().subscribe({
      next:(data) =>{
        this.response =  data;
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
 
      }
    })
  }

  notification2(){

    this.api4.getnoti().subscribe({
      next:(data) =>{
        this.response2 =  data;
      },
      error:() =>{
        alert('error');
      },
      complete:() =>{
          this.toggleToast();
  
      }
    })
   }

   toggleToast() {
    this.visible = !this.visible;
  }


  Openpage(url:any){
    this.router.navigateByUrl(url);
  }

  po_count(){
    this.api2.getPoCount().subscribe({
      next:(data) =>{
        console.log(data);
        this.response4 = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }

   po_count_closed(){
    this.api2.getPoCount_closed().subscribe({
      next:(data) =>{
        console.log(data);
        this.response6 = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }

   get_service_count(){
    this.api2.replacecount().subscribe({
      next:(data) =>{
        console.log(data);
        this.replace = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }

   get_dealer_list(){
    this.api2.approved_dealer_list().subscribe({
      next:(data) =>{
        console.log(data);
        this.dealerList = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }

   onTableDataChange(event: any) {
    this.page = event;

  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
}
