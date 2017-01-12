"use strict";
/**
 * Created by irfan.maulana on 1/11/2017.
 */
var Species = (function () {
    function Species(average_height, average_lifespan, classification, created, designation, edited, eye_colors, hair_colors, homeworld, language, name, skin_colors) {
        this.average_height = average_height;
        this.average_lifespan = average_lifespan;
        this.classification = classification;
        this.created = created;
        this.designation = designation;
        this.edited = edited;
        this.eye_colors = eye_colors;
        this.hair_colors = hair_colors;
        this.homeworld = homeworld;
        this.language = language;
        this.name = name;
        this.skin_colors = skin_colors;
    }
    return Species;
}());
exports.Species = Species;
//# sourceMappingURL=Species.js.map