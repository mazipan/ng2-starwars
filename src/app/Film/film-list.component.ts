/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { FilmService } from './film-list.service';
import { Film } from './Film';

@Component({
  moduleId: module.id,
  selector: 'film-list',
  template: `
      <h2>Films</h2>
      
      <table class="table">
        <thead class="table__head">
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Episode</th>
          <th>Release Date</th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr *ngFor="let film of films; let i = index; trackBy:trackByEpisodId;">
          <td>{{ i+1 }}</td>
          <td>{{ film.title }}</td>
          <td>{{ film.episode_id }}</td>
          <td>{{ film.release_date }}</td>
        </tr>
        </tbody>
      </table>
  `
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


    return film.episode_id;
  }
}
