"use strict";
/**
 * Created by irfan.maulana on 1/8/2017.
 */
var Planet = (function () {
    function Planet(name, rotation_period, orbital_period, diameter, terrain, climate, gravity, surface_water, population) {
        this.name = name;
        this.rotation_period = rotation_period;
        this.orbital_period = orbital_period;
        this.diameter = diameter;
        this.terrain = terrain;
        this.climate = climate;
        this.gravity = gravity;
        this.surface_water = surface_water;
        this.population = population;
    }
    return Planet;
}());
exports.Planet = Planet;
//# sourceMappingURL=Planet.js.map