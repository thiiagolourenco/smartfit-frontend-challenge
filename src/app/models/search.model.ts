export class Search {
  constructor(
    public shift: string | null,
    public showClosedUnits: boolean | null
  ) {
    this.shift = shift;
    this.showClosedUnits = showClosedUnits;
  }
}
