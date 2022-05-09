import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyLookUpServiceService } from './my-look-up-service.service';
interface City {
  name: string;
  code: string;
  inactive: boolean;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent implements OnInit {
  text: string;

  results: string[];
  countries = [];

  value: Date;

  color: string;
  value1: string;

  inputFormGroup: FormGroup;

  cities: City[];
  selectedCityCodes: string[];
  constructor(private mylookupservice: MyLookUpServiceService) {}

  ngOnInit(): void {
    this.mylookupservice.getResults().then((countries) => {
      this.countries = countries;
    });
    this.inputFormGroup = new FormGroup({
      password: new FormControl(null),
    });
    this.cities = [
      { name: 'New York', code: 'NY', inactive: false },
      { name: 'Rome', code: 'RM', inactive: true },
      { name: 'London', code: 'LDN', inactive: false },
      { name: 'Istanbul', code: 'IST', inactive: true },
      { name: 'Paris', code: 'PRS', inactive: false },
    ];
  }
  search(event) {
    let filtered: any[] = [];
    console.log(event);

    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (
        country.name.toLowerCase().indexOf(query.toLowerCase()) == 0 ||
        country.code.toLowerCase().indexOf(query.toLowerCase()) == 0
      ) {
        filtered.push(country.name);
      }
    }
    this.results = filtered;
  }
  onClickCalendar() {
    if (this.value) {
      console.log(this.value);
    }
  }
  onClickColorPicker() {
    if (this.color) {
      console.log(this.color);
    }
  }
  onSubmit() {
    console.log(this.inputFormGroup.get('password').value);
  }
  onClickMultiSelect() {
    if (this.selectedCityCodes) console.log(this.selectedCityCodes);
  }
}
