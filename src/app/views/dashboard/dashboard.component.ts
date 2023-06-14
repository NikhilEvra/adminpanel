import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

import { DashboardChartsData, IChartProps } from './dashboard-charts-data';
import Swal from 'sweetalert2';
import { NavigationExtras, Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { cilArrowRight, cilChartPie } from '@coreui/icons';

interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
  dealer : string
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  USTEMP = localStorage.getItem('user');
  getuserdata:any=[];
  response:any=[];
  response1:any=[];
  response2:any=[];
  response3:any=[];
  response4:any=[];
  response5:any=[];
  response6:any=[];
  res:any=[];
  dealerList:any=[];
  replace:any=[];
  complaintsinfo:any=[];
  complaints:any=[];

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  // colors = [
  //   { color: 'primary', textColor: 'primary' , title : 'Total Dealers', value : this.response1.total},
  //   { color: 'dark', textColor: 'secondary', title : 'Total Sale', value : '10' },
  //   { color: 'success', textColor: 'success', title : 'Total Amount ', value : '10' },
  //   { color: 'danger', textColor: 'danger' , title : 'Purchse Order', value : '10'},
  //   { color: 'warning', textColor: 'warning' , title : 'Replacement Request', value : '10'},
  //   { color: 'info', textColor: 'info' , title : 'Complaints', value : '10'},
   
  // ];


  
  myfun=false;
  public visible = false;

  slides: any[] = new Array(2).fill({id: -1, src: '', title: '', subtitle: ''});

  icons = { cilChartPie, cilArrowRight };
  
  constructor(private chartsData: DashboardChartsData,
    private router : Router,
    private api : LoginserviceService,
    private api2 : DashService,
    private api3 : DealerserviceService) {

      console.log(this.USTEMP);
      if (this.USTEMP) {
        this.getuserdata = JSON.parse(this.USTEMP) ;
      }
  }

  public users: IUser[] = [
    {
      name: 'Nikhil',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Us',
      usage: 50,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Mastercard',
      activity: '10 sec ago',
      avatar: './assets/img/avatars/1.jpg',
      status: 'success',
      color: 'success',
      dealer:'EV0018'
    },
    {
      name: 'Praneshu',
      state: 'Recurring ',
      registered: 'Jan 1, 2021',
      country: 'Br',
      usage: 10,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Visa',
      activity: '5 minutes ago',
      avatar: './assets/img/avatars/2.jpg',
      status: 'danger',
      color: 'info',
      dealer:'EV002'
    },
    {
      name: 'Deepak',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'In',
      usage: 74,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Stripe',
      activity: '1 hour ago',
      avatar: './assets/img/avatars/3.jpg',
      status: 'warning',
      color: 'warning',
      dealer:'EV001'
    },
    {
      name: 'Varsha',
      state: 'Sleep',
      registered: 'Jan 1, 2021',
      country: 'Fr',
      usage: 98,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Paypal',
      activity: 'Last month',
      avatar: './assets/img/avatars/4.jpg',
      status: 'secondary',
      color: 'danger',
      dealer:'EV0016'
    },
    {
      name: 'Suraj',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Es',
      usage: 22,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'ApplePay',
      activity: 'Last week',
      avatar: './assets/img/avatars/5.jpg',
      status: 'success',
      color: 'primary',
      dealer:'EV0019'
    },
    {
      name: 'Nikhil',
      state: 'New',
      registered: 'Jan 1, 2021',
      country: 'Pl',
      usage: 43,
      period: 'Jun 11, 2021 - Jul 10, 2021',
      payment: 'Amex',
      activity: 'Yesterday',
      avatar: './assets/img/avatars/6.jpg',
      status: 'info',
      color: 'dark',
      dealer:'EV0010'
    }
  ];
  
  public mainChart: IChartProps = {};
  public chart: Array<IChartProps> = [];
  public trafficRadioGroup = new UntypedFormGroup({
    trafficRadio: new UntypedFormControl('Month')
  });

  ngOnInit() {
    

    this.po_count_approved();
    this.po_count_closed();
    this.dealer_count();
    this.get_complaint_count();
    this.sale_count();
    this.sale_amount();
    this.po_count();
    this.get_dealer_list();
    this.get_service_count();
    this.initCharts();
    this.menu();
    
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
    // this.slides[2] = {
    //   id: 2,
    //   src: 'assets/images/helter_banner.png',
    //   title: 'Third slide',
    //   subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    // }
    // this.dashgraph();
   
  }
  // startTimer() {
  //   setInterval(() => {
  //     alert('yes');
  //   },3000)

    
  // }
  
  initCharts(): void {
    this.mainChart = this.chartsData.mainChart;
  }

  setTrafficPeriod(value: string): void {
    this.trafficRadioGroup.setValue({ trafficRadio: value });
    this.chartsData.initMainChart(value);
    this.initCharts();
  }
  menu(): void{
    this.api.menu.subscribe(res => {
      console.log(res);
      // this.menu1 = res;
      // console.log(this.menu1);
    });
  }
  ngAfterViewInit(){
    // console.log(this.getuserdata);
 
            if (localStorage.getItem("user") === null) 
            {
              Swal.fire({
                          'imageUrl' :'assets/img/lock.gif',
                          'imageHeight':'100px', 
                          'title': 'Please Login Again !',
                           heightAuto: false , 
                           timer: 3000
                          });
                          
              this.router.navigateByUrl('/login');
            }
  
            // if(this.menu1 === null)
            // {
            //   this.router.navigateByUrl('/login');
            //   console.log("null behaviour");
            // }else{
            //   console.log("yes");
            // }
   }
   dashgraph(){
    
    this.api2.graphdata().subscribe({
      next:(data) =>{
        // alert('yes')
        console.log(data);
        this.response = data;
        
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }

   dealer_count(){
    this.api2.getdealerCount().subscribe({
      next:(data) =>{
        console.log(data);
        this.response1 = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }
   sale_count(){
    this.api2.getsaleCount().subscribe({
      next:(data) =>{
        console.log(data);
        this.response2 = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }
   sale_amount(){
    this.api2.gettotalAmount().subscribe({
      next:(data) =>{
        console.log(data);
        this.response3 = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
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

   po_count_approved(){
    this.api2.getPoCount_approved().subscribe({
      next:(data) =>{
        console.log(data);
        this.response5 = data;
        
       
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

   get_dealer_list(){
    this.api2.dealer_list().subscribe({
      next:(data) =>{
        console.log(data);
        this.dealerList = data;
        this.page = 1;
        
       
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

   get_complaint_count(){
    this.api2.complaintcount().subscribe({
      next:(data) =>{
        console.log(data);
        this.complaintsinfo = data;
        this.complaints = this.complaintsinfo[0];
        
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
     
      }
    })
   }
   

   Openpage(url:any){
 this.router.navigateByUrl(url)
   }

   land(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/dealerapproval'], navigationExtras);
   }

   toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  update(id :any){
    this.api3.updatestatus_Active(id).subscribe({
      next:(data) => {
        console.log(data);
        this.res = data;
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
        // this.router.navigateByUrl('/dashboard')
       
      },
      error:() => {
        console.log('err');
       
         Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
         
      },
      complete:() => {
       this.get_dealer_list();
       this.dealer_count();
       if(this.res.status == false){
        Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
       }
       else{
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
       }
        
      }
    })  
  }
  onTableDataChange(event: any) {
    this.page = event;

  }
}
