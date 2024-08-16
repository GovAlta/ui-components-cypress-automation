import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug2033Page.component.html",
})
export class Bug2033PageComponent {
  step = -1;
  status = ["incomplete", "incomplete", "incomplete", "incomplete"];

  updateStep(event: Event) {
    this.step = (event as CustomEvent).detail.step;
  }

  setPage(page: number) {
    if (page < 1 || page > 4) return;
    this.step = page;
  }
}