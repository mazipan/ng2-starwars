/**
 * Created by irfan.maulana on 1/9/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmListComponent }    from './Film/film-list.component';
import { PlanetListComponent }  from './Planet/planet-list.component';

const appRoutes: Routes = [
  { path: '',  component: FilmListComponent },
  { path: 'film',  component: FilmListComponent },
  { path: 'planet', component: PlanetListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
