import { Component } from '@angular/core';

import { navItems } from './_nav';
import { navItems2 } from './_nav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];
   
  hide = false;
  hide2 = false;

  public navItems = navItems;

  public navItems2 = navItems2;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor() {
    console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      }
  }

  
  ngOnInit() {
    
    if(this.getuserdata.name = 'Admin'){
      this.hide = true;
      this.hide2 = false;
    } else if(this.getuserdata.name = 'Account'){
      this.hide2 = true;
      this.hide = false;
    }

   
  }
}
