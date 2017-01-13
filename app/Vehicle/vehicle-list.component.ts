/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { VehicleService } from './vehicle-list.service';
import { Vehicle } from './Vehicle';

@Component({
  moduleId: module.id,
  selector: 'vehicle-list',
  template: `
      <h2>Vehicle</h2>
      
      <table class="table">
        <thead class="table__head">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Vehicle Class</th>
          <th>Manufacturer</th>
        </tr>
        </thead>
        <tbody class="table__body">
        <tr *ngFor="let veh of vehicle; let i = index; trackBy:trackByName;">
          <td>{{ i+1 }}</td>
          <td>{{ veh.name }}</td>
          <td>{{ veh.vehicle_class }}</td>
          <td>{{ veh.manufacturer }}</td>
        </tr>
        </tbody>
      </table>
  `
})
export class VehicleListComponent implements OnInit {

  vehicle: Vehicle[];


  constructor(
    private vehicleService: VehicleService
  ){}

  ngOnInit() {

    this.loadDataVehicle()
  }

  loadDataVehicle() {
    this.vehicleService.getVehicle()
      .subscribe(
        vehicle => this.vehicle = vehicle, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }

  trackByName(index:number, vehicle:Vehicle) {


    return vehicle.name;
  }
}
