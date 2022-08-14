import { Component, ViewChild , OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

import { ApiCustomerService } from '../service/api-customer.service';
import { CustomerSearch } from '../model/customer-search';
import { CustomerDto } from '../model/customer-dto';

@Component({
  selector: 'app-customer-list3',
  templateUrl: './customer-list3.component.html',
  styleUrls: ['./customer-list3.component.scss']
})
export class CustomerList3Component implements OnInit, OnDestroy {
  //@ViewChild('searchfield', { read: CustomerSearchComponent }) searchfield: CustomerSearchComponent;
  //@ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('mytable') table: any;
  search: CustomerSearch;
  count = 0;
  page = 0;
  pagesize = 9999;
  colord = 'province';
  coldir = 'asc';
  rows;

  columns: [
    { name: 'Id' },
    { name: 'Name' },
    { name: 'Surname' },
    { name: 'Address' },
    { name: 'Cap' },
    { name: 'City' },
    { name: 'Province' },
    { name: 'Action' }
  ];

  destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private service: ApiCustomerService) {
    this.search = new CustomerSearch();
  }

  ngOnInit(): void {
    this.loadCusomerBySearch();
  }

  toggleExpandGroup(group) {
    this.table.groupHeader.toggleExpandGroup(group);
  }

  loadCusomerBySearch(): void {
    this.service.getCusomerBySearch(this.search, this.page, this.pagesize,
             this.colord, this.coldir).subscribe(response => {
      const result = response as any;
      this.count = result.count;
      this.rows = result.items;
    });
  }

  ngOnDestroy(): void {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
