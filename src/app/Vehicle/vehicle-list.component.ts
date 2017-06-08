/**
 * Created by irfan.maulana on 1/8/2017.
 */
import { Component, OnInit } from '@angular/core';

import { VehicleService } from './vehicle-list.service';
import { Vehicle } from './Vehicle';

@Component({
  moduleId: module.id,
  selector: 'vehicle-list',
  templateUrl: './vehicle-list.component.html'
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
