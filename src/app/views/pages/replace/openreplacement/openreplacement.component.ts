import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { DealerserviceService } from 'src/app/services/dealer/dealerservice.service';
import { SearchserviceService } from 'src/app/services/search/searchservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-openreplacement',
  templateUrl: './openreplacement.component.html',
  styleUrls: ['./openreplacement.component.scss']
})
export class OpenreplacementComponent {
  response:any=[];
  response2:any=[];
  replacement:any=[];

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;

  form!: FormGroup;
  hide = false;
 
  constructor(
    private api : DealerserviceService,
    private router : Router,
    private formb : FormBuilder,
    private api2 : SearchserviceService) {

  }
  initForm(){  
    this.form = this.formb.group({    
      replacement_id: ['', Validators.required],
    })

   
  }
  ngOnInit(): void {
    this.get_openreplacement();
    this.initForm();
  }

  get_openreplacement(){
    this.api.openreplacements().subscribe({
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

   view_replacement(id:any){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        id:id
      }
    };

    this.router.navigate(['/pages/viewreplacement'], navigationExtras);
   }

   update(id:any){
    this.api.update_replace_status_Closed(id).subscribe({
      next:(data) => {
        console.log(data);
        this.response2 = data;
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.response2.message,  heightAuto: false ,  timer: 3000});
        // this.router.navigateByUrl('/dashboard')
       
      },
      error:() => {
        console.log('err');
       
         Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': 'Internal Server Error!',  heightAuto: false ,  timer: 3000});
         
      },
      complete:() => {
       this.get_openreplacement();
       if(this.response2.status == false){
        Swal.fire({'imageUrl' :'assets/img/error.png','imageHeight':'100px', 'title': this.response2.message,  heightAuto: false ,  timer: 3000});
       }
       else{
        Swal.fire({'imageUrl' :'assets/img/login.gif','imageHeight':'100px', 'title': this.response2.message,  heightAuto: false ,  timer: 3000});
       }
        
      }
    })  
   }

  //  fetchPosts(): void {
    // this.api2.customer_list().subscribe(
    //   (response) => {
    //     this.POSTS = response;
    //     console.log(response);
    //     this.page = 1;
        
 
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );


  // }


  onTableDataChange(event: any) {
    this.page = event;

  }
   search(){
    this.api2.get_replacement_by_id(this.form.value.replacement_id).subscribe({
      next:(data) =>{
        console.log(data);
        this.replacement = data;
        
       
      },
      error:() =>{
        alert('error');
     
      },
      complete:() =>{
       this.hide = true
      }
    })
   }
}
