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
import { FilmListComponent } from './Films/film-list.component';
import { PlanetListComponent } from './Planet/planet-list.component';

/*
 Service to get data
 */
import { FilmService } from './Films/film-list.service';
import { PlanetService } from './Planet/planet-list.service';

const appRoutes: Routes = [
  { path: '',  component: FilmListComponent },
  { path: 'film',  component: FilmListComponent },
  { path: 'planet', component: PlanetListComponent }
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
    PlanetListComponent
  ],

  providers: [
    FilmService,
    PlanetService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
