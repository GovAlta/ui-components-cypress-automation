import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug2044Page.component.html",
})

export class Bug2044PageComponent {
  reactiveDate2FormCtrl = new FormControl("");
}