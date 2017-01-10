"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by irfan.maulana on 1/8/2017.
 */
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
// Import RxJs required methods
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var PlanetService = (function () {
    // Resolve HTTP using the constructor
    function PlanetService(http) {
        this.http = http;
        // private instance variable to hold base url
        this.BASE_URL = 'http://swapi.co/api/planets/';
    }
    PlanetService.prototype.getPlanets = function () {
        function mapPlanetsResponse(response) {
            // The response of the API has a results
            // property with the actual results
            return response.json().results.map(toPlanet);
        }
        function toPlanet(r) {
            var planet = ({
                name: r.name,
                rotation_period: r.rotation_period,
                orbital_period: r.orbital_period,
                diameter: r.diameter,
                terrain: r.terrain,
                climate: r.climate,
                gravity: r.gravity,
                surface_water: r.surface_water,
                population: r.population,
            });
            return planet;
        }
        // ...using get request
        return this.http.get(this.BASE_URL)
            .map(mapPlanetsResponse)
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server error'); });
    };
    PlanetService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PlanetService);
    return PlanetService;
}());
exports.PlanetService = PlanetService;
//# sourceMappingURL=planet-list.service.js.map