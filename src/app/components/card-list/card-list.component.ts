import { Component, Input } from '@angular/core';
import { Units } from 'src/app/models/units.model';

@Component({
  selector: 'smartfit-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() units: Units[];

  constructor() {
    this.units = [];
  }
}
