import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app.material.module';
import { AppRoutingModule } from './app-routing.module';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CustomerList1Component } from './customer-list1/customer-list1.component';
import { CustomerList2Component } from './customer-list2/customer-list2.component';
import { CustomerList3Component } from './customer-list3/customer-list3.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    CustomerSearchComponent,
    CustomerList1Component,
    CustomerList2Component,
    CustomerList3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxDatatableModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
