/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { SpeciesService } from './species-list.service';
import { Species } from './Species';

@Component({
  moduleId: module.id,
  selector: 'species-list',
  template: `
      <h2>Species</h2>
      
      <table class="table">
        <thead class="table__head">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Classification</th>
          <th>Homeworld</th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr *ngFor="let spec of species; let i = index; trackBy:trackByName;">
          <td>{{ i+1 }}</td>
          <td>{{ spec.name }}</td>
          <td>{{ spec.classification }}</td>
          <td>{{ spec.homeworld }}</td>
        </tr>
        </tbody>
      </table>
  `
})
export class SpeciesListComponent implements OnInit {

  species: Species[];


  constructor(
    private speciesService: SpeciesService
  ){}

  ngOnInit() {

    this.loadDataSpecies()
  }

  loadDataSpecies() {
    this.speciesService.getSpecies()
      .subscribe(
        species => this.species = species, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  trackByName(index:number, species:Species) {


    return species.name;
  }
}
