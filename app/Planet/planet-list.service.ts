/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { Planet } from './Planet';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlanetService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private BASE_URL = 'http://swapi.co/api/planets/';

  getPlanets() : Observable<Planet[]> {

    function mapPlanetsResponse(response:Response): Planet[]{
      // The response of the API has a results
      // property with the actual results
      return response.json().results.map(toPlanet)
    }

    function toPlanet(r:any): Planet{

      let planet = <Planet>({
        name: r.name,
        rotation_period: r.rotation_period,
        orbital_period: r.orbital_period,
        diameter: r.diameter,
        terrain: r.terrain,
        climate: r.climate,
        gravity: r.gravity,
        surface_water: r.surface_water,
        population: r.population,
      });

      return planet;
    }

    // ...using get request
    return this.http.get(this.BASE_URL)
      // ...and calling .json() on the response to return data
      .map(mapPlanetsResponse)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
