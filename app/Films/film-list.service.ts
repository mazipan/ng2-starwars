/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response} from '@angular/http';
import { Film }    from './film';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FilmService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private BASE_URL = 'http://swapi.co/api/films/';

  getFilms() : Observable<Film[]> {

    function mapFilmResponse(response:Response): Film[]{
      // The response of the API has a results
      // property with the actual results
      return response.json().results.map(toFilm)
    }

    function toFilm(r:any): Film{

      let film = <Film>({
        title: r.title,
        episodeId: r.episode_id,
        openingCrawl: r.opening_crawl,
        director: r.director,
        producer: r.producer,
        releaseDate: r.release_date,
      });

      return film;
    }

    // ...using get request
    return this.http.get(this.BASE_URL)
      // ...and calling .json() on the response to return data
      .map(mapFilmResponse)
      //...errors if any
      .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }

}
