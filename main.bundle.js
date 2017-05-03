webpackJsonp([1,4],{

/***/ 142:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 142;


/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__film_list_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmListComponent; });
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
        return film.episode_id;
    };
    return FilmListComponent;
}());
FilmListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'film-list',
        template: "\n      <h2>Films</h2>\n      \n      <table class=\"table\">\n        <thead class=\"table__head\">\n        <tr>\n          <th>#</th>\n          <th>Title</th>\n          <th>Episode</th>\n          <th>Release Date</th>\n        </tr>\n        </thead>\n        <tbody class=\"table__body\">\n        <tr *ngFor=\"let film of films; let i = index; trackBy:trackByEpisodId;\">\n          <td>{{ i+1 }}</td>\n          <td>{{ film.title }}</td>\n          <td>{{ film.episode_id }}</td>\n          <td>{{ film.release_date }}</td>\n        </tr>\n        </tbody>\n      </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__film_list_service__["a" /* FilmService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__film_list_service__["a" /* FilmService */]) === "function" && _a || Object])
], FilmListComponent);

var _a;
//# sourceMappingURL=film-list.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Created by irfan.maulana on 1/8/2017.
 */

var FoooterComponent = (function () {
    function FoooterComponent() {
    }
    return FoooterComponent;
}());
FoooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'FooterBlock',
        template: "\n      <div class=\"footer__wrapper\">\n      \n        <div class=\"footer__text\">\n          <span>Crafted with &nbsp;<i class=\"fa fa-heart-o\"></i>&nbsp; by Irfan Maulana</span>\n        </div>\n      \n        <ul class=\"footer__list\">\n          <li class=\"footer__icon footer__icon--facebook\">\n            <a rel=\"nofollow\" href=\"https://www.facebook.com/mazipanneh\">\n              <i class=\"fa fa-facebook-square\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--twitter\">\n            <a rel=\"nofollow\" href=\"https://twitter.com/Maz_Ipan\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--instagram\">\n            <a rel=\"nofollow\" href=\"https://instagram.com/maz_ipan\">\n              <i class=\"fa fa-instagram\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--linkedin\">\n            <a rel=\"nofollow\" href=\"https://id.linkedin.com/in/irfanmaulanamazipan\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--slideshare\">\n            <a rel=\"nofollow\" href=\"https://www.slideshare.net/IrfanMaulana21\">\n              <i class=\"fa fa-slideshare\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--github\">\n            <a rel=\"nofollow\" href=\"https://github.com/mazipan\">\n              <i class=\"fa fa-github\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--wordpress\">\n            <a rel=\"nofollow\" href=\"https://mazipanneh.wordpress.com/\">\n              <i class=\"fa fa-wordpress\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n  "
    })
], FoooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
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

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.headerTitle = 'Ng2-StarWars';
        this.userName = 'Irfan';
    }
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'HeaderBlock',
        template: "\n        <header role=\"header\" class=\"site__header header\" id=\"header\">\n          <div class=\"header__wrapper\">\n        \n            <div class=\"header__brand\">\n              <img src=\"https://mazipan.github.io/lightweight-admin-template/images/irfan-maulana.jpg\" />\n              <div class=\"header__title\" [innerText]=\"headerTitle\">\n              </div>\n            </div>\n        \n            <div class=\"header__account account account--has-login\">\n              <div class=\"account__wrapper\">\n                <img class=\"account__img\" src=\"https://mazipan.github.io/lightweight-admin-template/images/irfan-maulana.jpg\" />\n                <span class=\"account__name\" [innerText]=\"userName\">\n                </span>\n              </div>\n              <i class=\"account__arrow fa fa-angle-down js--show-dropdown-menu\"></i>\n        \n              <div class=\"account__menu\">\n                <ul class=\"account__menu-wrapper\">\n                  <li class=\"account__menu-item\"><a href=\"#profil\">Profile</a></li>\n                  <li class=\"account__menu-item\"><a href=\"#logout\">Logout</a></li>\n                </ul>\n              </div>\n        \n            </div>\n        \n            <div class=\"header__nav--mobile\">\n              <div class=\"header__nav-btn\" id=\"menu-toggle\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n              </div>\n            </div>\n        \n          </div>\n        </header>\n  "
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
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


var NavigationComponent = (function () {
    function NavigationComponent(router) {
        this.router = router;
    }
    NavigationComponent.prototype.switchTab = function (tabName) {
        this.tabActive = tabName;
        this.router.navigate(['/' + tabName]);
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'NavigationListBlock',
        template: "\n      <ul class=\"nav__wrapper\">\n      \n        <li class=\"nav__item\" routerLink=\"/film\" routerLinkActive=\"nav__item--active\">\n          <a href=\"/film\">\n            <i class=\"nav__icon fa fa-film\"></i> Film\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/planet\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/planet\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-globe\"></i> Planet\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/vehicle\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/vehicle\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-car\"></i> Vehicle\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/starship\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/starship\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-space-shuttle\"></i> Starship\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/species\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/species\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-paw\"></i> Species\n          </a>\n        </li>\n        <li class=\"nav__item\" routerLink=\"/people\" routerLinkActive=\"nav__item--active\">\n          <a routerLink=\"/people\" routerLinkActive=\"active\">\n            <i class=\"nav__icon fa fa-users\"></i> People\n          </a>\n        </li>\n      \n      </ul>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], NavigationComponent);

var _a;
//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people_list_service__ = __webpack_require__(89);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleListComponent; });
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


var PeopleListComponent = (function () {
    function PeopleListComponent(peopleService) {
        this.peopleService = peopleService;
    }
    PeopleListComponent.prototype.ngOnInit = function () {
        this.loadDataPeople();
    };
    PeopleListComponent.prototype.loadDataPeople = function () {
        var _this = this;
        this.peopleService.getPeople()
            .subscribe(function (people) { return _this.people = people; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    PeopleListComponent.prototype.trackByName = function (index, people) {
        return people.name;
    };
    return PeopleListComponent;
}());
PeopleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'people-list',
        template: "\n      <h2>People</h2>\n      \n      <table class=\"table\">\n        <thead class=\"table__head\">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Gender</th>\n          <th>Home World</th>\n        </tr>\n        </thead>\n        <tbody class=\"table__body\">\n        <tr *ngFor=\"let person of people; let i = index; trackBy:trackByName;\">\n          <td>{{ i+1 }}</td>\n          <td>{{ person.name }}</td>\n          <td>{{ person.gender }}</td>\n          <td>{{ person.homeworld }}</td>\n        </tr>\n        </tbody>\n      </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__people_list_service__["a" /* PeopleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__people_list_service__["a" /* PeopleService */]) === "function" && _a || Object])
], PeopleListComponent);

var _a;
//# sourceMappingURL=people-list.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__planet_list_service__ = __webpack_require__(90);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetListComponent; });
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
    return PlanetListComponent;
}());
PlanetListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'planet-list',
        template: "\n        <h2>Planets</h2>\n      \n        <table class=\"table\">\n          <thead class=\"table__head\">\n          <tr>\n            <th>#</th>\n            <th>Name</th>\n            <th>Diameter</th>\n            <th>Population</th>\n          </tr>\n          </thead>\n          <tbody class=\"table__body\">\n          <tr *ngFor=\"let planet of planets; let i = index; trackBy:trackByName;\">\n            <td>{{ i+1 }}</td>\n            <td>{{ planet.name }}</td>\n            <td>{{ planet.diameter }}</td>\n            <td>{{ planet.population }}</td>\n          </tr>\n          </tbody>\n        </table>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__planet_list_service__["a" /* PlanetService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__planet_list_service__["a" /* PlanetService */]) === "function" && _a || Object])
], PlanetListComponent);

var _a;
//# sourceMappingURL=planet-list.component.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__species_list_service__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesListComponent; });
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


var SpeciesListComponent = (function () {
    function SpeciesListComponent(speciesService) {
        this.speciesService = speciesService;
    }
    SpeciesListComponent.prototype.ngOnInit = function () {
        this.loadDataSpecies();
    };
    SpeciesListComponent.prototype.loadDataSpecies = function () {
        var _this = this;
        this.speciesService.getSpecies()
            .subscribe(function (species) { return _this.species = species; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    SpeciesListComponent.prototype.trackByName = function (index, species) {
        return species.name;
    };
    return SpeciesListComponent;
}());
SpeciesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'species-list',
        template: "\n      <h2>Species</h2>\n      \n      <table class=\"table\">\n        <thead class=\"table__head\">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Classification</th>\n          <th>Homeworld</th>\n        </tr>\n        </thead>\n        <tbody class=\"table__body\">\n        <tr *ngFor=\"let spec of species; let i = index; trackBy:trackByName;\">\n          <td>{{ i+1 }}</td>\n          <td>{{ spec.name }}</td>\n          <td>{{ spec.classification }}</td>\n          <td>{{ spec.homeworld }}</td>\n        </tr>\n        </tbody>\n      </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__species_list_service__["a" /* SpeciesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__species_list_service__["a" /* SpeciesService */]) === "function" && _a || Object])
], SpeciesListComponent);

var _a;
//# sourceMappingURL=species-list.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__starship_list_service__ = __webpack_require__(92);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarshipListComponent; });
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


var StarshipListComponent = (function () {
    function StarshipListComponent(starshipService) {
        this.starshipService = starshipService;
    }
    StarshipListComponent.prototype.ngOnInit = function () {
        this.loadDataStarship();
    };
    StarshipListComponent.prototype.loadDataStarship = function () {
        var _this = this;
        this.starshipService.getStarship()
            .subscribe(function (starship) { return _this.starship = starship; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    StarshipListComponent.prototype.trackByName = function (index, starship) {
        return starship.name;
    };
    return StarshipListComponent;
}());
StarshipListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'starship-list',
        template: "\n      <h2>Films</h2>\n      \n      <table class=\"table\">\n        <thead class=\"table__head\">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Passengers</th>\n          <th>Starship Class</th>\n        </tr>\n        </thead>\n        <tbody class=\"table__body\">\n        <tr *ngFor=\"let star of starship; let i = index; trackBy:trackByName;\">\n          <td>{{ i+1 }}</td>\n          <td>{{ star.name }}</td>\n          <td>{{ star.passengers }}</td>\n          <td>{{ star.starship_class }}</td>\n        </tr>\n        </tbody>\n      </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__starship_list_service__["a" /* StarshipService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__starship_list_service__["a" /* StarshipService */]) === "function" && _a || Object])
], StarshipListComponent);

var _a;
//# sourceMappingURL=starship-list.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_list_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListComponent; });
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


var VehicleListComponent = (function () {
    function VehicleListComponent(vehicleService) {
        this.vehicleService = vehicleService;
    }
    VehicleListComponent.prototype.ngOnInit = function () {
        this.loadDataVehicle();
    };
    VehicleListComponent.prototype.loadDataVehicle = function () {
        var _this = this;
        this.vehicleService.getVehicle()
            .subscribe(function (vehicle) { return _this.vehicle = vehicle; }, //Bind to view
        function (//Bind to view
            err) {
            // Log errors if any
            console.log(err);
        });
    };
    VehicleListComponent.prototype.trackByName = function (index, vehicle) {
        return vehicle.name;
    };
    return VehicleListComponent;
}());
VehicleListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'vehicle-list',
        template: "\n      <h2>Vehicle</h2>\n      \n      <table class=\"table\">\n        <thead class=\"table__head\">\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Vehicle Class</th>\n          <th>Manufacturer</th>\n        </tr>\n        </thead>\n        <tbody class=\"table__body\">\n        <tr *ngFor=\"let veh of vehicle; let i = index; trackBy:trackByName;\">\n          <td>{{ i+1 }}</td>\n          <td>{{ veh.name }}</td>\n          <td>{{ veh.vehicle_class }}</td>\n          <td>{{ veh.manufacturer }}</td>\n        </tr>\n        </tbody>\n      </table>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__vehicle_list_service__["a" /* VehicleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__vehicle_list_service__["a" /* VehicleService */]) === "function" && _a || Object])
], VehicleListComponent);

var _a;
//# sourceMappingURL=vehicle-list.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'my-app',
        template: "\n      <HeaderBlock></HeaderBlock>\n    \n      <main role=\"main\" class=\"site__main main\">\n        <nav class=\"main__nav nav\">\n      \n          <NavigationListBlock></NavigationListBlock>\n      \n          <FooterBlock></FooterBlock>\n      \n        </nav>\n        <article class=\"main__content content\">\n          <div class=\"content__wrapper\">\n              \n              <router-outlet></router-outlet>\n            \n          </div>\n        </article>\n      </main>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Header_header_component__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Navigation_navigation_component__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Footer_footer_component__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Film_film_list_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__People_people_list_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Planet_planet_list_component__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Species_species_list_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__Starship_starship_list_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__Vehicle_vehicle_list_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__Film_film_list_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__Planet_planet_list_service__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__People_people_list_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Species_species_list_service__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__Starship_starship_list_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Vehicle_vehicle_list_service__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/*
Component partial
*/










/*
 Service to get data
 */






var appRoutes = [
    { path: '', redirectTo: 'film', pathMatch: 'full' },
    { path: 'film', component: __WEBPACK_IMPORTED_MODULE_8__Film_film_list_component__["a" /* FilmListComponent */] },
    { path: 'planet', component: __WEBPACK_IMPORTED_MODULE_10__Planet_planet_list_component__["a" /* PlanetListComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_9__People_people_list_component__["a" /* PeopleListComponent */] },
    { path: 'species', component: __WEBPACK_IMPORTED_MODULE_11__Species_species_list_component__["a" /* SpeciesListComponent */] },
    { path: 'starship', component: __WEBPACK_IMPORTED_MODULE_12__Starship_starship_list_component__["a" /* StarshipListComponent */] },
    { path: 'vehicle', component: __WEBPACK_IMPORTED_MODULE_13__Vehicle_vehicle_list_component__["a" /* VehicleListComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true })
        ],
        /*
         AppRoutingModule
         RouterModule.forRoot(appRoutes)
        */
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__Header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__Navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__Footer_footer_component__["a" /* FoooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Film_film_list_component__["a" /* FilmListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__People_people_list_component__["a" /* PeopleListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__Planet_planet_list_component__["a" /* PlanetListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__Species_species_list_component__["a" /* SpeciesListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__Starship_starship_list_component__["a" /* StarshipListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__Vehicle_vehicle_list_component__["a" /* VehicleListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__Film_film_list_service__["a" /* FilmService */],
            __WEBPACK_IMPORTED_MODULE_16__People_people_list_service__["a" /* PeopleService */],
            __WEBPACK_IMPORTED_MODULE_15__Planet_planet_list_service__["a" /* PlanetService */],
            __WEBPACK_IMPORTED_MODULE_17__Species_species_list_service__["a" /* SpeciesService */],
            __WEBPACK_IMPORTED_MODULE_18__Starship_starship_list_service__["a" /* StarshipService */],
            __WEBPACK_IMPORTED_MODULE_19__Vehicle_vehicle_list_service__["a" /* VehicleService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjectConverter; });
/**
 * Created by irfan.maulana on 1/23/2017.
 */
var ObjectConverter = (function () {
    function ObjectConverter() {
    }
    ObjectConverter.prototype.convertResponseToFilm = function (r) {
        var film = ({
            title: r.title,
            episode_id: r.episode_id,
            opening_crawl: r.opening_crawl,
            director: r.director,
            producer: r.producer,
            release_date: r.release_date,
        });
        return film;
    };
    ;
    ObjectConverter.prototype.convertResponseToPeople = function (r) {
        var people = ({
            birth_year: r.birth_year,
            eye_color: r.eye_color,
            openingCrawl: r.openingCrawl,
            gender: r.gender,
            hair_color: r.hair_color,
            height: r.height,
            homeworld: r.homeworld,
            mass: r.mass,
            name: r.name,
            skin_color: r.skin_color,
            created: r.created,
            edited: r.edited,
        });
        return people;
    };
    ;
    ObjectConverter.prototype.convertResponseToPlanet = function (r) {
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
    };
    ;
    ObjectConverter.prototype.convertResponseToSpecies = function (r) {
        var species = ({
            average_height: r.average_height,
            average_lifespan: r.average_lifespan,
            classification: r.classification,
            created: r.created,
            designation: r.designation,
            edited: r.edited,
            eye_colors: r.eye_colors,
            hair_colors: r.hair_colors,
            homeworld: r.homeworld,
            language: r.language,
            name: r.name,
            skin_colors: r.skin_colors
        });
        return species;
    };
    ;
    ObjectConverter.prototype.convertResponseToStarship = function (r) {
        var starship = ({
            MGLT: r.MGLT,
            cargo_capacity: r.cargo_capacity,
            openingCrawl: r.openingCrawl,
            consumables: r.consumables,
            created: r.created,
            crew: r.crew,
            edited: r.edited,
            hyperdrive_rating: r.hyperdrive_rating,
            length: r.length,
            manufacturer: r.manufacturer,
            max_atmosphering_speed: r.max_atmosphering_speed,
            model: r.model,
            name: r.name,
            passengers: r.passengers,
            starship_class: r.starship_class
        });
        return starship;
    };
    ObjectConverter.prototype.convertResponseToVehicle = function (r) {
        var vehicle = ({
            name: r.name,
            model: r.model,
            manufacturer: r.manufacturer,
            cost_in_credits: r.cost_in_credits,
            length: r.length,
            max_atmosphering_speed: r.max_atmosphering_speed,
            crew: r.crew,
            passengers: r.passengers,
            cargo_capacity: r.cargo_capacity,
            consumables: r.consumables,
            vehicle_class: r.vehicle_class
        });
        return vehicle;
    };
    return ObjectConverter;
}());

//# sourceMappingURL=ObjectConverter.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlCollection; });
/**
 * Created by irfan.maulana on 1/22/2017.
 */
var UrlCollection = (function () {
    function UrlCollection() {
    }
    return UrlCollection;
}());

UrlCollection.FILM = "https://swapi.co/api/films/";
UrlCollection.PEOPLE = "https://swapi.co/api/people/";
UrlCollection.PLANET = "https://swapi.co/api/planets/";
UrlCollection.SPECIES = "https://swapi.co/api/species/";
UrlCollection.STARSHIP = "https://swapi.co/api/starships/";
UrlCollection.VEHICLE = "https://swapi.co/api/vehicles/";
//# sourceMappingURL=UrlCollection.js.map

/***/ }),

/***/ 482:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(143);


/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilmService; });
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



// Import RxJs required methods




var FilmService = (function () {
    // Resolve HTTP using the constructor
    function FilmService(http) {
        this.http = http;
        // public variable to expose
        this.PAGESIZE = 10;
        this.totalPage = 0;
        this.count = 0;
        this.currentPage = 1;
        this.isNextable = false;
        this.isPrevable = false;
    }
    FilmService.prototype.getFilms = function () {
        var thisService = this;
        var objectConverter = new __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__["a" /* ObjectConverter */]();
        function mapFilmResponse(response) {
            thisService.currentPage = 1;
            thisService.count = response.json().count;
            thisService.isNextable = response.json().next !== null;
            thisService.isPrevable = response.json().previous !== null;
            if (thisService.count > thisService.PAGESIZE) {
                thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE);
            }
            else {
                thisService.totalPage = 0;
            }
            // The response of the API has a results
            // property with the actual results
            return response.json().results.map(objectConverter.convertResponseToFilm);
        }
        // ...using get request
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__["a" /* UrlCollection */].FILM)
            .map(mapFilmResponse)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return FilmService;
}());
FilmService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], FilmService);

var _a;
//# sourceMappingURL=film-list.service.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleService; });
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



// Import RxJs required methods




var PeopleService = (function () {
    // Resolve HTTP using the constructor
    function PeopleService(http) {
        this.http = http;
        // public variable to expose
        this.PAGESIZE = 10;
        this.totalPage = 0;
        this.count = 0;
        this.currentPage = 1;
        this.isNextable = false;
        this.isPrevable = false;
    }
    PeopleService.prototype.getPeople = function () {
        var thisService = this;
        var objectConverter = new __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__["a" /* ObjectConverter */]();
        function mapPeopleResponse(response) {
            thisService.currentPage = 1;
            thisService.count = response.json().count;
            thisService.isNextable = response.json().next !== null;
            thisService.isPrevable = response.json().previous !== null;
            if (thisService.count > thisService.PAGESIZE) {
                thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE);
            }
            else {
                thisService.totalPage = 0;
            }
            // The response of the API has a results
            // property with the actual results
            return response.json().results.map(objectConverter.convertResponseToPeople);
        }
        // ...using get request
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__["a" /* UrlCollection */].PEOPLE)
            .map(mapPeopleResponse)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return PeopleService;
}());
PeopleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PeopleService);

var _a;
//# sourceMappingURL=people-list.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanetService; });
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



// Import RxJs required methods




var PlanetService = (function () {
    // Resolve HTTP using the constructor
    function PlanetService(http) {
        this.http = http;
        // public variable to expose
        this.PAGESIZE = 10;
        this.totalPage = 0;
        this.count = 0;
        this.currentPage = 1;
        this.isNextable = false;
        this.isPrevable = false;
    }
    PlanetService.prototype.getPlanets = function () {
        var thisService = this;
        var objectConverter = new __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__["a" /* ObjectConverter */]();
        function mapPlanetsResponse(response) {
            thisService.currentPage = 1;
            thisService.count = response.json().count;
            thisService.isNextable = response.json().next !== null;
            thisService.isPrevable = response.json().previous !== null;
            if (thisService.count > thisService.PAGESIZE) {
                thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE);
            }
            else {
                thisService.totalPage = 0;
            }
            // The response of the API has a results
            // property with the actual results
            return response.json().results.map(objectConverter.convertResponseToPlanet);
        }
        // ...using get request
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__["a" /* UrlCollection */].PLANET)
            .map(mapPlanetsResponse)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return PlanetService;
}());
PlanetService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PlanetService);

var _a;
//# sourceMappingURL=planet-list.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeciesService; });
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



// Import RxJs required methods




var SpeciesService = (function () {
    // Resolve HTTP using the constructor
    function SpeciesService(http) {
        this.http = http;
        // public variable to expose
        this.PAGESIZE = 10;
        this.totalPage = 0;
        this.count = 0;
        this.currentPage = 1;
        this.isNextable = false;
        this.isPrevable = false;
    }
    SpeciesService.prototype.getSpecies = function () {
        var thisService = this;
        var objectConverter = new __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__["a" /* ObjectConverter */]();
        function mapSpeciesResponse(response) {
            thisService.currentPage = 1;
            thisService.count = response.json().count;
            thisService.isNextable = response.json().next !== null;
            thisService.isPrevable = response.json().previous !== null;
            if (thisService.count > thisService.PAGESIZE) {
                thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE);
            }
            else {
                thisService.totalPage = 0;
            }
            // The response of the API has a results
            // property with the actual results
            return response.json().results.map(objectConverter.convertResponseToSpecies);
        }
        // ...using get request
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__["a" /* UrlCollection */].SPECIES)
            .map(mapSpeciesResponse)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return SpeciesService;
}());
SpeciesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], SpeciesService);

var _a;
//# sourceMappingURL=species-list.service.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarshipService; });
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



// Import RxJs required methods




var StarshipService = (function () {
    // Resolve HTTP using the constructor
    function StarshipService(http) {
        this.http = http;
        // public variable to expose
        this.PAGESIZE = 10;
        this.totalPage = 0;
        this.count = 0;
        this.currentPage = 1;
        this.isNextable = false;
        this.isPrevable = false;
    }
    StarshipService.prototype.getStarship = function () {
        var thisService = this;
        var objectConverter = new __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__["a" /* ObjectConverter */]();
        function mapStarshipResponse(response) {
            thisService.currentPage = 1;
            thisService.count = response.json().count;
            thisService.isNextable = response.json().next !== null;
            thisService.isPrevable = response.json().previous !== null;
            if (thisService.count > thisService.PAGESIZE) {
                thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE);
            }
            else {
                thisService.totalPage = 0;
            }
            // The response of the API has a results
            // property with the actual results
            return response.json().results.map(objectConverter.convertResponseToStarship);
        }
        // ...using get request
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__["a" /* UrlCollection */].STARSHIP)
            .map(mapStarshipResponse)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return StarshipService;
}());
StarshipService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], StarshipService);

var _a;
//# sourceMappingURL=starship-list.service.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleService; });
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



// Import RxJs required methods




var VehicleService = (function () {
    // Resolve HTTP using the constructor
    function VehicleService(http) {
        this.http = http;
        // public variable to expose
        this.PAGESIZE = 10;
        this.totalPage = 0;
        this.count = 0;
        this.currentPage = 1;
        this.isNextable = false;
        this.isPrevable = false;
    }
    VehicleService.prototype.getVehicle = function () {
        var thisService = this;
        var objectConverter = new __WEBPACK_IMPORTED_MODULE_6__Helpers_ObjectConverter__["a" /* ObjectConverter */]();
        function mapVehicleResponse(response) {
            thisService.currentPage = 1;
            thisService.count = response.json().count;
            thisService.isNextable = response.json().next !== null;
            thisService.isPrevable = response.json().previous !== null;
            if (thisService.count > thisService.PAGESIZE) {
                thisService.totalPage = Math.ceil(thisService.count / thisService.PAGESIZE);
            }
            else {
                thisService.totalPage = 0;
            }
            // The response of the API has a results
            // property with the actual results
            return response.json().results.map(objectConverter.convertResponseToVehicle);
        }
        // ...using get request
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__Helpers_UrlCollection__["a" /* UrlCollection */].VEHICLE)
            .map(mapVehicleResponse)
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error'); });
    };
    return VehicleService;
}());
VehicleService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], VehicleService);

var _a;
//# sourceMappingURL=vehicle-list.service.js.map

/***/ })

},[482]);
//# sourceMappingURL=main.bundle.js.map