import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';

@Component({
  selector: 'app-viewdealer',
  templateUrl: './viewdealer.component.html',
  styleUrls: ['./viewdealer.component.scss']
})
export class ViewdealerComponent {
  idd:any=[];
  dealer:any=[];

  constructor(
    private api2 :DashService,
    private route : ActivatedRoute) {
      
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    ); 

    this.get_dealer();
    }

    get_dealer(){
      this.api2.get_dealer_by_id(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.dealer = data;         
        },
        error:() =>{
          alert('error');

        },
        complete:() =>{
       
        }
      })
     }
}
