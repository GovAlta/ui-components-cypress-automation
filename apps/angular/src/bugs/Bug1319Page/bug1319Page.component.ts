import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1319Page.component.html",
  styleUrls: ['./bug1319Page.component.css'],

})
export class Bug1319PageComponent {
  onChange(event: Event) {
    // handle change
    console.log((event as CustomEvent).detail.value);
  }
}
