/**
 * Created by irfan.maulana on 1/8/2017.
 */
export class Film {
  constructor(
    public title: string,
    public episodeId: number,
    public openingCrawl: string,
    public director: string,
    public producer: string,
    public releaseDate: string,
  ) { }
}
