import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1758Page.component.html",
})
export class Bug1758PageComponent {
  open = false;
  onClick(event: Event) {
    this.open = !this.open;
  }
}
