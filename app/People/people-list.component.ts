/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { PeopleService } from './people-list.service';
import { People } from './People';

@Component({
  moduleId: module.id,
  selector: 'people-list',
  template: `
      <h2>People</h2>
      
      <table class="table">
        <thead class="table__head">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Home World</th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr *ngFor="let person of people; let i = index; trackBy:trackByName;">
          <td>{{ i+1 }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.gender }}</td>
          <td>{{ person.homeworld }}</td>
        </tr>
        </tbody>
      </table>
  `
})
export class PeopleListComponent implements OnInit {

  people: People[];


  constructor(
    private peopleService: PeopleService
  ){}

  ngOnInit() {

    this.loadDataPeople()
  }

  loadDataPeople() {
    this.peopleService.getPeople()
      .subscribe(
        people => this.people = people, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  trackByName(index:number, people:People) {

    return people.name;
  }
}
