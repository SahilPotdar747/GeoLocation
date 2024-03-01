import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FeatherModule } from "angular-feather";
import { allIcons } from "angular-feather/icons";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FullComponent } from "./layouts/full/full.component";
import { DemoFlexyModule } from "./demo-flexy-module";

// Modules
import { DashboardModule } from "./dashboard/dashboard.module";






// prime ng
import { MessageService } from "primeng/api";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { CardModule } from "primeng/card";
import { AccordionModule } from "primeng/accordion";
import { CheckboxModule } from "primeng/checkbox";
import { MenubarModule } from "primeng/menubar";

import { DatePipe } from "@angular/common";
import { NgxSpinnerModule } from "ngx-spinner";
import { MatExpansionModule } from "@angular/material/expansion";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


//barcode
import { NgxBarcodeModule } from "ngx-barcode";



@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    DashboardModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    MatExpansionModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    NgxBarcodeModule,
    CardModule,
    AccordionModule,
    CheckboxModule,
    MenubarModule

  ],
  providers: [
   
    FormBuilder,
    MessageService,
    DatePipe,
   
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
