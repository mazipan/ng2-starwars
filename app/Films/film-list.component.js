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
var film_list_service_1 = require('./film-list.service');
var FilmListComponent = (function () {
    function FilmListComponent(filmService) {
        this.filmService = filmService;
    }
    FilmListComponent.prototype.ngOnInit = function () {
        this.loadDataFilms();
    };
    FilmListComponent.prototype.loadDataFilms = function () {
        var _this = this;
        this.filmService.getFilms()
            .subscribe(function (films) { return _this.films = films; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    FilmListComponent.prototype.trackByEpisodId = function (index, film) {
        return film.episodeId;
    };
    FilmListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'film-list',
            templateUrl: 'film-list.component.html'
        }), 
        __metadata('design:paramtypes', [film_list_service_1.FilmService])
    ], FilmListComponent);
    return FilmListComponent;
}());
exports.FilmListComponent = FilmListComponent;
//# sourceMappingURL=film-list.component.js.map