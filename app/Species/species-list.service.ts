/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { Species }    from './Species';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpeciesService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private BASE_URL = 'http://swapi.co/api/species/';

  getSpecies() : Observable<Species[]> {

    function mapSpeciesResponse(response:Response): Species[]{
      // The response of the API has a results
      // property with the actual results
      return response.json().results.map(toSpecies)
    }

    function toSpecies(r:any): Species{

      let species = <Species>({
        average_height: r.average_height,
        average_lifespan: r.average_lifespan,
        classification: r.classification,
        created: r.created,
        designation: r.designation,
        edited: r.edited,
        eye_colors: r.eye_colors,
        hair_colors: r.hair_colors,
        homeworld: r.homeworld,
        language: r.language,
        name: r.name,
        skin_colors: r.skin_colors
      });

      return species;
    }

    // ...using get request
    return this.http.get(this.BASE_URL)
      // ...and calling .json() on the response to return data
      .map(mapSpeciesResponse)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
