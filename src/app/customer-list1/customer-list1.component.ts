import { Component, ViewChild , OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { tap, takeUntil } from 'rxjs/operators';

import { CustomerSearchComponent } from '../customer-search/customer-search.component';
import { ApiCustomerService } from '../service/api-customer.service';
import { CustomerSearch } from '../model/customer-search';
import { CustomerDto } from '../model/customer-dto';

@Component({
  selector: 'app-customer-list1',
  templateUrl: './customer-list1.component.html',
  styleUrls: ['./customer-list1.component.scss']
})
export class CustomerList1Component implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('searchfield', { read: CustomerSearchComponent }) searchfield: CustomerSearchComponent;
  search: CustomerSearch;
  count = 0;
  page = 0;
  pagesize = 10;
  colord = 'id';
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

  ngAfterViewInit(): void {
    this.searchfield.changetext$.pipe(
      tap(value => {
        this.search.fulltext = value;
        this.loadCusomerBySearch();
      }),
      takeUntil(this.destroy)
    ).subscribe();
  }

  onPage(event): void {
    this.page = event.offset;
    this.loadCusomerBySearch();
  }

  onSort(event): void {
    this.page = 0;
    this.colord = event.sorts[0].prop;
    this.coldir = event.sorts[0].dir;
    this.loadCusomerBySearch();
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
