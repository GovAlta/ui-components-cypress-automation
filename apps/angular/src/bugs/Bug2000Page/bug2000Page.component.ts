import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug2000Page.component.html",
})
export class Bug2000PageComponent {

  dateCtrl = new FormControl();

}
