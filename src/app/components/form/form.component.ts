import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search } from 'src/app/models/search.model';

import { Units } from 'src/app/models/units.model';
import { FilterService } from 'src/app/services/filter/filter.service';
import { UnitsService } from 'src/app/services/units/units.service';

@Component({
  selector: 'smartfit-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public search: Search;
  public searchForm!: FormGroup;

  public results: Units[];
  public filteredResults: Units[];

  constructor(
    private fb: FormBuilder,
    private unitsService: UnitsService,
    private filterService: FilterService
  ) {
    this.search = new Search('', false);
    this.results = [];
    this.filteredResults = [];
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      shift: ['', Validators.required],
      showClosedUnits: false,
    });

    try {
      this.unitsService.getAllUnits().subscribe((data) => {
        this.results = data.locations;
        this.filteredResults = data.locations;
      });
    } catch (e) {
      console.log(e);
    }
  }

  onSubmit(): void {
    //JUST TO TEST OBJECT INSTANCE
    this.search = new Search(
      this.searchForm.controls['shift'].value,
      this.searchForm.controls['showClosedUnits'].value
    );

    if (this.search.shift) {
      this.filteredResults = this.filterService.filter(
        this.results,
        this.search.showClosedUnits,
        this.search.shift
      );
    }
  }

  onClean(): void {
    this.search = new Search('', false);
    this.searchForm.reset();
  }
}
