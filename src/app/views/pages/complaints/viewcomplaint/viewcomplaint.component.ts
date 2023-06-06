import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashService } from 'src/app/services/data/dash.service';

@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.component.html',
  styleUrls: ['./viewcomplaint.component.scss']
})
export class ViewcomplaintComponent {

  idd:any=[];
  complaint:any=[];

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

    this.get_complaint();
    }

    get_complaint(){
      this.api2.opencomplaint(this.idd.id).subscribe({
        next:(data) =>{
          console.log(data);
          this.complaint = data;         
        },
        error:() =>{
          alert('error');

        },
        complete:() =>{
       
        }
      })
     }
}
