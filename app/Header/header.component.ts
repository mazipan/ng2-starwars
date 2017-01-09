/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'HeaderBlock',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
    headerTitle: string;
    userName: string;

    constructor() {
      this.headerTitle = 'Ng2-StarWars';
      this.userName = 'Irfan';
    }
}
