/**
 * Created by irfan.maulana on 1/9/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmListComponent } from './Film/film-list.component';
import { PeopleListComponent } from './People/people-list.component';
import { PlanetListComponent } from './Planet/planet-list.component';
import { SpeciesListComponent } from './Species/species-list.component';
import { StarshipListComponent } from './Starship/starship-list.component';
import { VehicleListComponent } from './Vehicle/vehicle-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'film', pathMatch: 'full' },
  { path: 'film',  component: FilmListComponent},
  { path: 'planet', component: PlanetListComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'species', component: SpeciesListComponent },
  { path: 'starship', component: StarshipListComponent },
  { path: 'vehicle', component: VehicleListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
