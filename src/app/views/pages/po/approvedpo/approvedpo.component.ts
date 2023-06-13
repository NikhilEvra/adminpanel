import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { SearchserviceService } from 'src/app/services/search/searchservice.service';

@Component({
  selector: 'app-approvedpo',
  templateUrl: './approvedpo.component.html',
  styleUrls: ['./approvedpo.component.scss']
})
export class ApprovedpoComponent {
  res:any=[];
  response:any=[];
  idd:any=[];
  result:any=[];
  hide = false;
  form!:FormGroup;

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;


  public visible = false;
  constructor(private router : Router,
    private route: ActivatedRoute,
    private api : DealerserviceService,
    private formb : FormBuilder,
    private api2 : SearchserviceService
  ) { }
  
  initForm(){  
    this.form = this.formb.group({    
      po_id: ['', Validators.required],
    })

   
  }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); 
        this.idd = params;
        console.log(this.idd.id);
      }
    );  
    this.po();
    this.initForm();
  }


  po(){
    this.api.get_po_approved().subscribe({
      next:(data) =>{
        console.log(data);
        this.response = data;
        this.page = 1;
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{

      }
    })
   }

 
   view_po(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/viewclosedpo'], navigationExtras);
   }

   onTableDataChange(event: any) {
    this.page = event;

  }
  
   search(){
    this.api2.get_po_by_po_id(this.form.value.po_id).subscribe({
      next:(data) =>{
        console.log(data);
        this.result = data;
        this.hide = true;
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{

      }
    })
   }
}
