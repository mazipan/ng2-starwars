/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { StarshipService } from './starship-list.service';
import { Starship } from './Starship';

@Component({
  moduleId: module.id,
  selector: 'starship-list',
  template: `
      <h2>Films</h2>
      
      <table class="table">
        <thead class="table__head">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Passengers</th>
          <th>Starship Class</th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr *ngFor="let star of starship; let i = index; trackBy:trackByName;">
          <td>{{ i+1 }}</td>
          <td>{{ star.name }}</td>
          <td>{{ star.passengers }}</td>
          <td>{{ star.starship_class }}</td>
        </tr>
        </tbody>
      </table>
  `
})
export class StarshipListComponent implements OnInit {

  starship: Starship[];


  constructor(
    private starshipService: StarshipService
  ){}

  ngOnInit() {

    this.loadDataStarship()
  }

  loadDataStarship() {
    this.starshipService.getStarship()
      .subscribe(
        starship => this.starship = starship, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  trackByName(index:number, starship:Starship) {


    return starship.name;
  }
}
