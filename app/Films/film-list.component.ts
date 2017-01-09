/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';
import { FilmService } from './film-list.service';
import { Film } from './film';

@Component({
  moduleId: module.id,
  selector: 'film-list',
  templateUrl: 'film-list.component.html'
})
export class FilmListComponent implements OnInit {

  films: Film[];


  constructor(
    private filmService: FilmService
  ){}

  ngOnInit() {

    this.loadDataFilms()
  }

  loadDataFilms() {
    this.filmService.getFilms()
      .subscribe(
        films => this.films = films, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  trackByEpisodId(index:number, film:Film) {


    return film.episodeId;
  }
}
