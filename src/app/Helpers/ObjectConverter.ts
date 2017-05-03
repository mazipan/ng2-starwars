/**
 * Created by irfan.maulana on 1/23/2017.
 */

import { Film }  from '../Film/Film';
import { People }  from '../People/People';
import { Planet }  from '../Planet/Planet';
import { Species }  from '../Species/Species';
import { Starship }  from '../Starship/Starship'
import { Vehicle }  from '../Vehicle/Vehicle';

export class ObjectConverter {

  public convertResponseToFilm(r:any): Film{

    let film = <Film>({
      title: r.title,
      episode_id: r.episode_id,
      opening_crawl: r.opening_crawl,
      director: r.director,
      producer: r.producer,
      release_date: r.release_date,
    });

    return film;
  };
  

  public convertResponseToPeople(r:any): People{

    let people = <People>({
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

  public convertResponseToPlanet(r:any): Planet{

    let planet = <Planet>({
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

  public convertResponseToSpecies(r:any): Species{

    let species = <Species>({
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

  public convertResponseToStarship(r:any): Starship{

    let starship = <Starship>({
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
  }

  public convertResponseToVehicle(r:any): Vehicle{

    let vehicle = <Vehicle>({
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
  }


}
