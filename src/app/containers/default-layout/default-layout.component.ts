import { Component } from '@angular/core';

import { navItems } from './_nav';
import { navItems2 } from './_nav';
import { navItems3 } from './_nav';
import { navItems4 } from './_nav';
import { navItems5 } from './_nav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];
   
  hide = false;
  hide2 = false;
  service = false;
  operations = false;
  store = false;

  public navItems = navItems;

  public navItems2 = navItems2;

  public navItems3 = navItems3;

  public navItems4 = navItems4;

  public navItems5 = navItems5;

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
    // alert(this.getuserdata.panel)
    if(this.getuserdata.panel === 'Admin'){
      this.hide = true;
      this.hide2 = false;
      this.service = false;
      this.operations = false;
      this.store = false;
    } else if(this.getuserdata.panel === 'Accounts'){
      this.hide2 = true;
      this.hide = false;
      this.service = false;
      this.operations = false;
      this.store = false;
    }else if(this.getuserdata.panel === 'Services'){
      this.hide2 = false;
      this.hide = false;
      this.service = true;
      this.operations = false;
      this.store = false;
    }else if(this.getuserdata.panel === 'Operations'){
      this.operations = true;
      this.hide2 = false;
      this.hide = false;
      this.service = false;
      this.store = false;
    }else if(this.getuserdata.panel === 'Store'){
      this.store = true;
      this.operations = false;
      this.hide2 = false;
      this.hide = false;
      this.service = false;
      
    }

  }
}
