"use strict";
/**
 * Created by irfan.maulana on 1/8/2017.
 */
var Film = (function () {
    function Film(title, episodeId, openingCrawl, director, producer, releaseDate) {
        this.title = title;
        this.episodeId = episodeId;
        this.openingCrawl = openingCrawl;
        this.director = director;
        this.producer = producer;
        this.releaseDate = releaseDate;
    }
    return Film;
}());
exports.Film = Film;
//# sourceMappingURL=Film.js.map