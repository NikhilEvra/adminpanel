import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from './icons/icon-subset';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  template: '<app-spinner></app-spinner><router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  title = 'Evra';
  // USTEMP = localStorage.getItem('user');
  // getuserdata:any=[];
  constructor(
    private router: Router,
    private titleService: Title,
    private iconSetService: IconSetService
  ) {
    titleService.setTitle(this.title);
    // iconSet singleton
    iconSetService.icons = { ...iconSubset };
    // console.log(this.USTEMP);
    // if (this.USTEMP) {
    //   this.getuserdata = JSON.parse(this.USTEMP) ;
    // }
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
    });

  }


}
