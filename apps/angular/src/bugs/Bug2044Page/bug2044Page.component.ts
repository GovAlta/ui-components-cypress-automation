import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug2044Page.component.html",
})
export class Bug2044PageComponent {
  disabled = false;
  reactiveDate2FormCtrl = new FormControl(new Date());
  disableDatePicker() {
      this.reactiveDate2FormCtrl.disable();
      this.disabled = true;
    }

    enableDatePicker() {
      this.reactiveDate2FormCtrl.enable();
      this.disabled = false;
    }
}
