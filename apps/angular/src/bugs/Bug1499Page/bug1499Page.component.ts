import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1499Page.component.html",
})
export class Bug1499PageComponent {
  value: string = "";
  onChange(event: Event) {
    // handle change
    console.log((event as CustomEvent).detail.value);
  }

}
