import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-accountsdash',
  templateUrl: './accountsdash.component.html',
  styleUrls: ['./accountsdash.component.scss']
})
export class AccountsdashComponent {
  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', subtitle: ''});
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];

  response4:any=[];
  replace:any=[];
  response6:any=[];

  constructor(
    private router : Router,

    private api2 : DashService,
    private api3 : DealerserviceService) {

      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      }
  }
  ngOnInit() {
   this.get_service_count();
   this.po_count();
   this.po_count_closed();
    
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
}
