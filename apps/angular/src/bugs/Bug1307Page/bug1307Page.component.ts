import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1307Page.component.html",
})
export class Bug1307PageComponent {
  onChange(event: Event) {
    // handle change
    //console.log((event as CustomEvent).detail.value);
  }
}
