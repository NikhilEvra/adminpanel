import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PoapprovalComponent } from './po/poapproval/poapproval.component';
import { ListComponent } from './dealer/list/list.component';
import { CustomerComponent } from './customer/customer.component';
import { ClosedcomplaintsComponent } from './complaints/closedcomplaints/closedcomplaints.component';
import { OpencomplaintsComponent } from './complaints/opencomplaints/opencomplaints.component';
import { AccountapprovalComponent } from './dealer/accountapproval/accountapproval.component';
import { OpenreplacementComponent } from './replace/openreplacement/openreplacement.component';

const routes: Routes = [
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'poapproval',
    component: PoapprovalComponent,
    data: {
      title: 'Register Page'
    }
  }
  ,
  {
    path: 'dealerlist',
    component: ListComponent,
    data: {
      title: 'Dealer List'
    }
  },
  {
    path: 'customerlist',
    component: CustomerComponent,
    data: {
      title: 'Customer List'
    }
  },
  {
    path: 'opencomplaints',
    component: OpencomplaintsComponent,
    data: {
      title: 'Open Complaints'
    }
  },
  {
    path: 'closedcomplanits',
    component: ClosedcomplaintsComponent,
    data: {
      title: 'Closed Complaints'
    }
  } ,
  {
    path: 'dealerapproval',
    component: AccountapprovalComponent,
    data: {
      title: 'Dealer Account Approval'
    }
  },
  {
    path: 'openreplacement',
    component: OpenreplacementComponent,
    data: {
      title: 'Open Replacements'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
