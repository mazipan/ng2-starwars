/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { PlanetService } from './planet-list.service';
import { Planet } from './Planet';

@Component({
  moduleId: module.id,
  selector: 'planet-list',
  templateUrl: './planet-list.component.html'

})
export class PlanetListComponent implements OnInit {

  planets: Planet[];


  constructor(
    private planetService: PlanetService
  ){}

  ngOnInit() {

    this.loadDataPlanets()
  }

  loadDataPlanets() {
    this.planetService.getPlanets()
      .subscribe(
        planets => this.planets = planets, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  trackByName(index:number, planet:Planet) {

    return planet.name;
  }
}
