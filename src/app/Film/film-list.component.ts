/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core'

import { FilmService } from './film-list.service'
import { Film } from './Film'

@Component({
  moduleId: module.id,
  selector: 'film-list',
  templateUrl: './film-list.component.html'
})
export class FilmListComponent implements OnInit {

  films: Film[]

  constructor (
    private filmService: FilmService
  ){}

  ngOnInit () {
    this.loadDataFilms()
  }

  loadDataFilms () {
    let self = this
    self.filmService.getFilms()
      .subscribe(
        films => self.films = films, //Bind to view
        err => {
          // Log errors if any
          console.log(err)
        })
  }

  trackByEpisodId (index:number, film:Film) {
    return film.episode_id
  }
}
