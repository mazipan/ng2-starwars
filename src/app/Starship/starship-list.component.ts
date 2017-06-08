/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { StarshipService } from './starship-list.service';
import { Starship } from './Starship';

@Component({
  moduleId: module.id,
  selector: 'starship-list',
  templateUrl: './starship-list.component.html'
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
