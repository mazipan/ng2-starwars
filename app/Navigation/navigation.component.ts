/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'NavigationListBlock',
  template: `
      <ul class="nav__wrapper">
      
        <li class="nav__item nav__item--active" routerLink="/film" routerLinkActive="nav__item--active">
          <a href="#">
            <i class="nav__icon fa fa-film"></i> Film
          </a>
        </li>
        <li class="nav__item" routerLink="/planet" routerLinkActive="nav__item--active">
          <a routerLink="/planet" routerLinkActive="active">
            <i class="nav__icon fa fa-globe"></i> Planet
          </a>
        </li>
        <li class="nav__item" routerLink="/vehicle" routerLinkActive="nav__item--active">
          <a routerLink="/vehicle" routerLinkActive="active">
            <i class="nav__icon fa fa-car"></i> Vehicle
          </a>
        </li>
        <li class="nav__item" routerLink="/spaceship" routerLinkActive="nav__item--active">
          <a routerLink="/spaceship" routerLinkActive="active">
            <i class="nav__icon fa fa-space-shuttle"></i> Spaceship
          </a>
        </li>
        <li class="nav__item" routerLink="/species" routerLinkActive="nav__item--active">
          <a routerLink="/species" routerLinkActive="active">
            <i class="nav__icon fa fa-paw"></i> Species
          </a>
        </li>
        <li class="nav__item" routerLink="/people" routerLinkActive="nav__item--active">
          <a routerLink="/people" routerLinkActive="active">
            <i class="nav__icon fa fa-users"></i> People
          </a>
        </li>
      
      </ul>
  `
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
