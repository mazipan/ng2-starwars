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
var planet_list_service_1 = require('./planet-list.service');
var PlanetListComponent = (function () {
    function PlanetListComponent(planetService) {
        this.planetService = planetService;
    }
    PlanetListComponent.prototype.ngOnInit = function () {
        this.loadDataPlanets();
    };
    PlanetListComponent.prototype.loadDataPlanets = function () {
        var _this = this;
        this.planetService.getPlanets()
            .subscribe(function (planets) { return _this.planets = planets; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    PlanetListComponent.prototype.trackByName = function (index, planet) {
        return planet.name;
    };
    PlanetListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'planet-list',
            templateUrl: 'planet-list.component.html'
        }), 
        __metadata('design:paramtypes', [planet_list_service_1.PlanetService])
    ], PlanetListComponent);
    return PlanetListComponent;
}());
exports.PlanetListComponent = PlanetListComponent;
//# sourceMappingURL=planet-list.component.js.map