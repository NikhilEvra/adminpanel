import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { NotificationService } from 'src/app/services/notification/notification.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-storedash',
  templateUrl: './storedash.component.html',
  styleUrls: ['./storedash.component.scss']
})
export class StoredashComponent {
  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', subtitle: ''});
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];
  
  dealerList:any=[];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  position = 'top-end';
  visible = false;
  percentage = 0;
  
  response:any=[];
  response2:any=[];

  po:any=[];

  constructor(
    private router : Router,
    private api :NotificationService,
    private api2 : DashService,
    private api3 : DealerserviceService,
    private api4 : StoreService) {

      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      }
  }
  ngOnInit() {
    this.get_dealer_list();
    this.notification();
   
    this.notification2();
    this.get_po();
    
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
    // this.toggleToast();
    this.api.getnoti_count().subscribe({
      next:(data) =>{
        this.response =  data;
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        this.toggleToast();
      }
    })
   }

   
  notification2(){
    // this.toggleToast();
    this.api.getnoti().subscribe({
      next:(data) =>{
        this.response2 =  data;
      },
      error:() =>{
        alert('error');
      },
      complete:() =>{
   
      }
    })
   }

   toggleToast() {
    this.visible = !this.visible;
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
  Openpage(url:any){
  this.router.navigateByUrl(url);
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
  
  
  get_po(){
    // this.toggleToast();
    this.api4.getpo().subscribe({
      next:(data) =>{
        this.po =  data;
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
        this.toggleToast();
      }
    })
   }

}