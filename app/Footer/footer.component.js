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
var FoooterComponent = (function () {
    function FoooterComponent() {
    }
    FoooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'FooterBlock',
            template: "\n      <div class=\"footer__wrapper\">\n      \n        <div class=\"footer__text\">\n          <span>Crafted with &nbsp;<i class=\"fa fa-heart-o\"></i>&nbsp; by Irfan Maulana</span>\n        </div>\n      \n        <ul class=\"footer__list\">\n          <li class=\"footer__icon footer__icon--facebook\">\n            <a rel=\"nofollow\" href=\"https://www.facebook.com/mazipanneh\">\n              <i class=\"fa fa-facebook-square\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--twitter\">\n            <a rel=\"nofollow\" href=\"https://twitter.com/Maz_Ipan\">\n              <i class=\"fa fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--instagram\">\n            <a rel=\"nofollow\" href=\"https://instagram.com/maz_ipan\">\n              <i class=\"fa fa-instagram\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--linkedin\">\n            <a rel=\"nofollow\" href=\"https://id.linkedin.com/in/irfanmaulanamazipan\">\n              <i class=\"fa fa-linkedin\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--slideshare\">\n            <a rel=\"nofollow\" href=\"https://www.slideshare.net/IrfanMaulana21\">\n              <i class=\"fa fa-slideshare\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--github\">\n            <a rel=\"nofollow\" href=\"https://github.com/mazipan\">\n              <i class=\"fa fa-github\"></i>\n            </a>\n          </li>\n          <li class=\"footer__icon footer__icon--wordpress\">\n            <a rel=\"nofollow\" href=\"https://mazipanneh.wordpress.com/\">\n              <i class=\"fa fa-wordpress\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], FoooterComponent);
    return FoooterComponent;
}());
exports.FoooterComponent = FoooterComponent;
//# sourceMappingURL=footer.component.js.map