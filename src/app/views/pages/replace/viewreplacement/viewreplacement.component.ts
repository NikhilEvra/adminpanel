import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';

@Component({
  selector: 'app-viewreplacement',
  templateUrl: './viewreplacement.component.html',
  styleUrls: ['./viewreplacement.component.scss']
})
export class ViewreplacementComponent {
  idd:any=[];
  replacement:any=[];
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

    this.get_replacement();
    }

    get_replacement(){
      this.api2.openreplacement(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.replacement = data;         
        },
        error:() =>{
          alert('error');

        },
        complete:() =>{
       
        }
      })
     }
}
  