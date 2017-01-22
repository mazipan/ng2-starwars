/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { People }    from './People';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PeopleService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private BASE_URL = 'http://swapi.co/api/people/';

  getPeople() : Observable<People[]> {

    function mapPeopleResponse(response:Response): People[]{
      // The response of the API has a results
      // property with the actual results
      return response.json().results.map(toPeople)
    }

    function toPeople(r:any): People{

      let people = <People>({
        birth_year: r.birth_year,
        eye_color: r.eye_color,
        openingCrawl: r.openingCrawl,
        gender: r.gender,
        hair_color: r.hair_color,
        height: r.height,
        homeworld: r.homeworld,
        mass: r.mass,
        name: r.name,
        skin_color: r.skin_color,
        created: r.created,
        edited: r.edited,
      });

      return people;
    }

    // ...using get request
    return this.http.get(this.BASE_URL)
      // ...and calling .json() on the response to return data
      .map(mapPeopleResponse)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
