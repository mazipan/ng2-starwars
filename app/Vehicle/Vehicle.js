"use strict";
/**
 * Created by irfan.maulana on 1/11/2017.
 */
var Vehicle = (function () {
    function Vehicle(name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, vehicle_class) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.cost_in_credits = cost_in_credits;
        this.length = length;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.crew = crew;
        this.passengers = passengers;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
        this.vehicle_class = vehicle_class;
    }
    return Vehicle;
}());
exports.Vehicle = Vehicle;
//# sourceMappingURL=Vehicle.js.map