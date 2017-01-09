import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

/*
Component partial
*/
import { AppComponent }  from './app.component';
import { HeaderComponent } from './Header/header.component';
import { NavigationComponent } from './Navigation/navigation.component';
import { FoooterComponent } from './Footer/footer.component';
import { FilmListComponent } from './Films/film-list.component';

/*
 Service to get data
 */
import { FilmService } from './Films/film-list.service';

@NgModule({

  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],

  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FoooterComponent,
    FilmListComponent
  ],

  providers: [
    FilmService
  ],

  bootstrap: [ AppComponent ]
})
export class AppModule { }
