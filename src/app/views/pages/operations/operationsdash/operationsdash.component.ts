import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-operationsdash',
  templateUrl: './operationsdash.component.html',
  styleUrls: ['./operationsdash.component.scss']
})
export class OperationsdashComponent {

  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', subtitle: ''});
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];
  
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

  }
  
}
