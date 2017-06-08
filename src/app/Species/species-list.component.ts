/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { SpeciesService } from './species-list.service';
import { Species } from './Species';

@Component({
  moduleId: module.id,
  selector: 'species-list',
  templateUrl: './species-list.component.html'
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
