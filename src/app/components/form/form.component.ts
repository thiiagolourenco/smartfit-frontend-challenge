import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Search } from 'src/app/models/search.model';

@Component({
  selector: 'smartfit-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public search: Search;
  public results: Location[];
  public searchForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.search = new Search('', false);
    this.results = [];
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      shift: ['', Validators.required],
      showClosedUnits: false,
    });
  }

  onSubmit(): void {
    console.log('SHIFT VALUE', this.searchForm.controls['shift'].value);
    console.log(
      'SHOW CLOISED UNIT VALUE',
      this.searchForm.controls['showClosedUnits'].value
    );
  }

  onClean(): void {
    this.search = new Search('', false);
    this.searchForm.reset();
  }
}
