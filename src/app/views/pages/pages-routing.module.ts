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
import { ViewSalesByIdComponent } from './customer/view-sales-by-id/view-sales-by-id.component';
import { ViewcomplaintComponent } from './complaints/viewcomplaint/viewcomplaint.component';
import { ViewreplacementComponent } from './replace/viewreplacement/viewreplacement.component';
import { ViewdealerComponent } from './dealer/viewdealer/viewdealer.component';
import { ViewpoComponent } from './po/viewpo/viewpo.component';
import { ApprovedpoComponent } from './po/approvedpo/approvedpo.component';
import { ClosedpoComponent } from './po/closedpo/closedpo.component';
import { ViewclosedpoComponent } from './po/viewclosedpo/viewclosedpo.component';
import { NewregestrationComponent } from './dealer/newregestration/newregestration.component';
import { AccountsdashComponent } from './accounts/accountsdash/accountsdash.component';
import { ServicedashComponent } from './servicepanel/servicedash/servicedash.component';
import { OperationsdashComponent } from './operations/operationsdash/operationsdash.component';
import { StoredashComponent } from './store/storedash/storedash.component';

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
      title: 'Purchase Order'
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
  },
  {
    path: 'view_sales_by_id',
    component: ViewSalesByIdComponent,
    data: {
      title: 'Customer Sales Information'
    }
  },
  {
    path: 'viewcomplaint',
    component: ViewcomplaintComponent,
    data: {
      title: 'View Complaint '
    }
  },
  {
    path: 'viewreplacement',
    component: ViewreplacementComponent,
    data: {
      title: 'View Replacement '
    }
  },
  {
    path: 'viewdealer',
    component: ViewdealerComponent,
    data: {
      title: 'View Dealer Info '
    }
  },
  {
    path: 'viewpo',
    component: ViewpoComponent,
    data: {
      title: 'View Purchase Order'
    }
  }, {
    path: 'approvedpo',
    component: ApprovedpoComponent,
    data: {
      title: 'View Approved Purchase Order'
    }
  },{
    path: 'closedpo',
    component: ClosedpoComponent,
    data: {
      title: 'Closed Purchase Order'
    }
  },{
    path: 'viewclosedpo',
    component: ViewclosedpoComponent,
    data: {
      title: 'View Closed Purchase Order'
    }
  },{
    path: 'newregestration',
    component: NewregestrationComponent,
    data: {
      title: 'View Non-Approved Dealers'
    }
  },{
    path: 'accountsdash',
    component: AccountsdashComponent,
    data: {
      title: 'Accounts Dashboard'
    }
  },{
    path: 'servicedash',
    component: ServicedashComponent,
    data: {
      title: 'Services Dashboard'
    }
  },{
    path: 'operationsdash',
    component: OperationsdashComponent,
    data: {
      title: 'Operations Dashboard'
    }
  },{
    path: 'storedash',
    component: StoredashComponent,
    data: {
      title: 'Store Dashboard'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
