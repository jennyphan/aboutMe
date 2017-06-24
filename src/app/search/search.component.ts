import {Component, OnInit, Input} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

/**
 * This is Search Component
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  formModel: FormGroup;
  @Input() inSearch: any;

  constructor() {
    const fb = new FormBuilder();
    this.formModel = fb.group({
      'searchText': [null, Validators.minLength(1)]
    });
  }

  ngOnInit() {

  }

  onSearch() {
    if (this.formModel.dirty && this.formModel.valid) {
      console.log('search text: ' + this.formModel.value.searchText);
    }
  }


}
