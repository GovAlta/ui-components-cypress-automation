import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1867Page.component.html",
})
export class Bug1867PageComponent {
  onClick(event: Event) {
    console.log("onClick")
  }
  onChange(event: Event) {
    console.log("onChange")
  }
}
