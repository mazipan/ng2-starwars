import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


/*
 Routing Application
 */
import { AppRoutingModule }  from './app.routing.module';

/*
Component partial
*/
import { AppComponent }  from './app.component';
import { HeaderComponent } from './Header/header.component';
import { NavigationComponent } from './Navigation/navigation.component';
import { FoooterComponent } from './Footer/footer.component';
import { FilmListComponent } from './Film/film-list.component';
import { PeopleListComponent } from './People/people-list.component';
import { PlanetListComponent } from './Planet/planet-list.component';
import { SpeciesListComponent } from './Species/species-list.component';
import { StarshipListComponent } from './Starship/starship-list.component';
import { VehicleListComponent } from './Vehicle/vehicle-list.component';

/*
 Service to get data
 */
import { FilmService } from './Film/film-list.service';
import { PlanetService } from './Planet/planet-list.service';
import { PeopleService } from "./People/people-list.service";
import { SpeciesService } from "./Species/species-list.service";
import { StarshipService } from "./Starship/starship-list.service";
import { VehicleService } from "./Vehicle/vehicle-list.service";

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
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  /*
   AppRoutingModule
   RouterModule.forRoot(appRoutes)
  */

  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FoooterComponent,
    FilmListComponent,
    PeopleListComponent,
    PlanetListComponent,
    SpeciesListComponent,
    StarshipListComponent,
    VehicleListComponent
  ],

  providers: [
    FilmService,
    PeopleService,
    PlanetService,
    SpeciesService,
    StarshipService,
    VehicleService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
