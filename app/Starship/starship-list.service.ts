/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { Starship }    from './Starship';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StarshipService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private BASE_URL = 'http://swapi.co/api/films/';

  getStarship() : Observable<Starship[]> {

    function mapStarshipResponse(response:Response): Starship[]{
      // The response of the API has a results
      // property with the actual results
      return response.json().results.map(toStarship)
    }

    function toStarship(r:any): Starship{

      let starship = <Starship>({
        MGLT: r.MGLT,
        cargo_capacity: r.cargo_capacity,
        openingCrawl: r.openingCrawl,
        consumables: r.consumables,
        created: r.created,
        crew: r.crew,
        edited: r.edited,
        hyperdrive_rating: r.hyperdrive_rating,
        length: r.length,
        manufacturer: r.manufacturer,
        max_atmosphering_speed: r.max_atmosphering_speed,
        model: r.model,
        name: r.name,
        passengers: r.passengers,
        starship_class: r.starship_class
      });

      return starship;
    }

    // ...using get request
    return this.http.get(this.BASE_URL)
      // ...and calling .json() on the response to return data
      .map(mapStarshipResponse)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
