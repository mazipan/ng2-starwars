/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { Vehicle }    from './Vehicle';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class VehicleService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private BASE_URL = 'http://swapi.co/api/films/';

  getVehicle() : Observable<Vehicle[]> {

    function mapVehicleResponse(response:Response): Vehicle[]{
      // The response of the API has a results
      // property with the actual results
      return response.json().results.map(toVehicle)
    }

    function toVehicle(r:any): Vehicle{

      let vehicle = <Vehicle>({
        name: r.name,
        model: r.model,
        manufacturer: r.manufacturer,
        cost_in_credits: r.cost_in_credits,
        length: r.length,
        max_atmosphering_speed: r.max_atmosphering_speed,
        crew: r.crew,
        passengers: r.passengers,
        cargo_capacity: r.cargo_capacity,
        consumables: r.consumables,
        vehicle_class: r.vehicle_class
      });

      return vehicle;
    }

    // ...using get request
    return this.http.get(this.BASE_URL)
      // ...and calling .json() on the response to return data
      .map(mapVehicleResponse)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
