import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  constructor(private router: Router) { }

  onGoPage1(): void {
    this.router.navigate(['/page1']);
  }

  onGoPage2(): void {
    this.router.navigate(['/page2']);
  }

  onGoPage3(): void {
    this.router.navigate(['/page3']);
  }

}
