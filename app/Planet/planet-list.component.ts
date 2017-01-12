/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { PlanetService } from './planet-list.service';
import { Planet } from './Planet';

@Component({
  moduleId: module.id,
  selector: 'planet-list',
  template: `
        <h2>Planets</h2>
      
        <table class="table">
          <thead class="table__head">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Diameter</th>
            <th>Population</th>
          </tr>
          </thead>
          <tbody class="table__body">
          <tr *ngFor="let planet of planets; let i = index; trackBy:trackByName;">
            <td>{{ i+1 }}</td>
            <td>{{ planet.name }}</td>
            <td>{{ planet.diameter }}</td>
            <td>{{ planet.population }}</td>
          </tr>
          </tbody>
        </table>`
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
