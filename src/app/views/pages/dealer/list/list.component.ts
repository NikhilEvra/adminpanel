import { Component } from '@angular/core';
import { DashService } from 'src/app/services/data/dash.service';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import Swal from 'sweetalert2';
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
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  dealerList:any=[];
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
response:any=[]
  res:any=[];
 
  constructor(
    private api2 : DashService,
    private api : DealerserviceService) {

      
  }

  ngOnInit(): void {

    this.get_dealer_list();
 
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
   update(id:any){
    this.api.updatestatus(id).subscribe({
    next:(data) =>{
      console.log(data);
      this.response = data;
     
    },
    error:() =>{
   
      // alert('error occured');
      Swal.fire({
        'imageUrl' :'assets/img/login.gif',
        'imageHeight':'100px', 
        'title': 'Internal Server Error',
         heightAuto: false , 
         timer: 3000
        });
    },
    complete:() =>{
   
      if(this.response.status == true){
         Swal.fire({
            'imageUrl' :'assets/img/lock.gif',
            'imageHeight':'100px', 
            'title': this.response.message,
             heightAuto: false , 
             timer: 3000
               });
      }
      
    }
  })
    // alert(id)
      // this.api.updatestatus(id).subscribe({
      //   next:(data) =>{
      //     console.log(data);
      //     this.res=data
         
      //     Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': this.res.message,  heightAuto: false ,  timer: 3000});
      //   },
      //   error:() =>{
      //     // alert('error');
      //     // Swal.fire({'imageUrl' :'assets/icon/login.gif','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
      //   },
      //   complete:() =>{
      //     if(this.res.status == true){
      //       Swal.fire({
      //          'imageUrl' :'assets/img/lock.gif',
      //          'imageHeight':'100px', 
      //          'title': this.res.message,
      //           heightAuto: false , 
      //           timer: 3000
      //             });
      //    }
      //   }
      // })
   }
   
}
