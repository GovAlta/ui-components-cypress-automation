import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1796Page.component.html",
})
export class Bug1796PageComponent {
  onClick(event: Event) {
    console.log("onClick")
  }
  onChange(event: Event) {
    console.log("onChange")
  }
}
