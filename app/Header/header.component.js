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
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.headerTitle = 'Ng2-StarWars';
        this.userName = 'Irfan';
    }
    HeaderComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'HeaderBlock',
            template: "\n        <header role=\"header\" class=\"site__header header\" id=\"header\">\n          <div class=\"header__wrapper\">\n        \n            <div class=\"header__brand\">\n              <img src=\"https://mazipan.github.io/lightweight-admin-template/images/irfan-maulana.jpg\" />\n              <div class=\"header__title\" [innerText]=\"headerTitle\">\n              </div>\n            </div>\n        \n            <div class=\"header__account account account--has-login\">\n              <div class=\"account__wrapper\">\n                <img class=\"account__img\" src=\"https://mazipan.github.io/lightweight-admin-template/images/irfan-maulana.jpg\" />\n                <span class=\"account__name\" [innerText]=\"userName\">\n                </span>\n              </div>\n              <i class=\"account__arrow fa fa-angle-down js--show-dropdown-menu\"></i>\n        \n              <div class=\"account__menu\">\n                <ul class=\"account__menu-wrapper\">\n                  <li class=\"account__menu-item\"><a href=\"#profil\">Profile</a></li>\n                  <li class=\"account__menu-item\"><a href=\"#logout\">Logout</a></li>\n                </ul>\n              </div>\n        \n            </div>\n        \n            <div class=\"header__nav--mobile\">\n              <div class=\"header__nav-btn\" id=\"menu-toggle\">\n                <span></span>\n                <span></span>\n                <span></span>\n                <span></span>\n              </div>\n            </div>\n        \n          </div>\n        </header>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map