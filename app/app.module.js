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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
/*
Component partial
*/
var app_component_1 = require('./app.component');
var header_component_1 = require('./Header/header.component');
var navigation_component_1 = require('./Navigation/navigation.component');
var footer_component_1 = require('./Footer/footer.component');
var film_list_component_1 = require('./Film/film-list.component');
var planet_list_component_1 = require('./Planet/planet-list.component');
/*
 Service to get data
 */
var film_list_service_1 = require('./Film/film-list.service');
var planet_list_service_1 = require('./Planet/planet-list.service');
var appRoutes = [
    { path: '', redirectTo: 'film', pathMatch: 'full' },
    { path: 'film', component: film_list_component_1.FilmListComponent },
    { path: 'planet', component: planet_list_component_1.PlanetListComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot(appRoutes)
            ],
            /*
             AppRoutingModule
             RouterModule.forRoot(appRoutes)
            */
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                navigation_component_1.NavigationComponent,
                footer_component_1.FoooterComponent,
                film_list_component_1.FilmListComponent,
                planet_list_component_1.PlanetListComponent
            ],
            providers: [
                film_list_service_1.FilmService,
                planet_list_service_1.PlanetService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map