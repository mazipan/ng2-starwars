/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'NavigationListBlock',
  templateUrl: 'navigation.component.html'
})

export class NavigationComponent {

  tabActive: string;

  constructor(
    private router: Router
  ) {}

  switchTab(tabName: string) {
    this.tabActive = tabName;
    this.router.navigate(['/'+ tabName]);
  }
}
