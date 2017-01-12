"use strict";
/**
 * Created by irfan.maulana on 1/11/2017.
 */
var Starship = (function () {
    function Starship(MGLT, cargo_capacity, openingCrawl, consumables, created, crew, edited, hyperdrive_rating, length, manufacturer, max_atmosphering_speed, model, name, passengers, starship_class) {
        this.MGLT = MGLT;
        this.cargo_capacity = cargo_capacity;
        this.openingCrawl = openingCrawl;
        this.consumables = consumables;
        this.created = created;
        this.crew = crew;
        this.edited = edited;
        this.hyperdrive_rating = hyperdrive_rating;
        this.length = length;
        this.manufacturer = manufacturer;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.model = model;
        this.name = name;
        this.passengers = passengers;
        this.starship_class = starship_class;
    }
    return Starship;
}());
exports.Starship = Starship;
//# sourceMappingURL=Starship.js.map