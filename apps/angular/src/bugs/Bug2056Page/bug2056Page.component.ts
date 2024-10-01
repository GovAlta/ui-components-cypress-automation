import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug2056Page.component.html",
})
export class Bug2056PageComponent {
  dateCtrl = new FormControl();

  dateChange() {
    console.log("changed", this.dateCtrl.value);
  }

  setValue() {
    const d = new Date();
    d.setDate(d.getDate() - 7);

    this.dateCtrl.patchValue(d);

    console.log("set: ", this.dateCtrl.value);
  }

  clearValue() {
    this.dateCtrl.reset();

    console.log("reset: ", this.dateCtrl.value);
  }
}
