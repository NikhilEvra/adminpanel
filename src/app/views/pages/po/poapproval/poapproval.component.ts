import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalModule } from '@coreui/angular';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';

@Component({
  selector: 'app-poapproval',
  templateUrl: './poapproval.component.html',
  styleUrls: ['./poapproval.component.scss']
})
export class PoapprovalComponent {
  response:any=[];
  idd:any=[];
  public visible = false;
  constructor(private router : Router,
    private route: ActivatedRoute,
    private api : DealerserviceService
  ) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        // this.orderby = params.orderby;
        // console.log(this.orderby); // price
        this.idd = params;
        console.log(this.idd.id);
      }
    );  
    this.po();
  }

  toggleLiveDemo() {
    this.visible = !this.visible;
  }

  handleLiveDemoChange(event: any) {
    this.visible = event;
  }

  po(){
    this.api.get_po().subscribe({
      next:(data) =>{
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

}
