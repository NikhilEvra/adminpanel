import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, PaginationModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ReactiveFormsModule } from '@angular/forms';
import { PoapprovalComponent } from './po/poapproval/poapproval.component';
import { DocsComponentsModule } from "../../../components/docs-components.module";
import { ListComponent } from './dealer/list/list.component';
import { CustomerComponent } from './customer/customer.component';
import { OpencomplaintsComponent } from './complaints/opencomplaints/opencomplaints.component';
import { ClosedcomplaintsComponent } from './complaints/closedcomplaints/closedcomplaints.component';
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
import { WidgetsModule } from '../widgets/widgets.module';
import { ChartjsModule } from '@coreui/angular-chartjs';


@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent,
        Page404Component,
        Page500Component,
        PoapprovalComponent,
        ListComponent,
        CustomerComponent,
        OpencomplaintsComponent,
        ClosedcomplaintsComponent,
        AccountapprovalComponent,
        OpenreplacementComponent,
        ViewSalesByIdComponent,
        ViewcomplaintComponent,
        ViewreplacementComponent,
        ViewdealerComponent,
        ViewpoComponent,
        ApprovedpoComponent,
        ClosedpoComponent,
        ViewclosedpoComponent,
        NewregestrationComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        CardModule,
        ButtonModule,
        GridModule,
        IconModule,
        FormModule,
        ReactiveFormsModule,
        DocsComponentsModule,
       ModalModule,
       TableModule,
       WidgetsModule,
       ChartjsModule,
       PaginationModule
       
       
    ]
})
export class PagesModule {
}
