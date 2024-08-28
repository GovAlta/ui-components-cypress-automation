import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1266Page.component.html",
})
export class Bug1266PageComponent {

  monthCtrl = new FormControl();

  months = [
      { number: 1, name: 'January' },
      { number: 2, name: 'February' },
      { number: 3, name: 'March' },
      { number: 4, name: 'April' },
      { number: 5, name: 'May' },
      { number: 6, name: 'June' },
      { number: 7, name: 'July' },
      { number: 8, name: 'August' },
      { number: 9, name: 'September' },
      { number: 10, name: 'October' },
      { number: 11, name: 'November' },
      { number: 12, name: 'December' }
    ]
}
