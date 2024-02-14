import { Units } from "./units.model";

export class UnitsResponse {
  constructor(public current_country_id: number, public locations: Units[]) {
    this.current_country_id = current_country_id;
    this.locations = locations;
  }
}
