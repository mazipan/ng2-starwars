/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { PeopleService } from './people-list.service';
import { People } from './People';

@Component({
  moduleId: module.id,
  selector: 'people-list',
  templateUrl: './people-list.component.html'
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
