import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { NotificationService } from 'src/app/services/notification/notification.service';

@Component({
  selector: 'app-operationsdash',
  templateUrl: './operationsdash.component.html',
  styleUrls: ['./operationsdash.component.scss']
})
export class OperationsdashComponent {

  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', subtitle: ''});
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];
  
  response:any=[];
  response2:any=[];
  showButton: boolean = false;
  
  position = 'top-end';
  visible = false;
  percentage = 0;

  constructor(
    private router : Router,

    private api2 : DashService,
    private api3 : DealerserviceService,
    private api : NotificationService) {

      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      }
  }
  ngOnInit() {
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
    // this.toggleToast();
    this.api.getnoti_count().subscribe({
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
    // this.toggleToast();
    this.api.getnoti().subscribe({
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


  Openpage(url:any){
  this.router.navigateByUrl(url);
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
}
