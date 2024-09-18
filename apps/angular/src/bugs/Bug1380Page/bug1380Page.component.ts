import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1380Page.component.html",
})
export class Bug1380PageComponent {
  value: string = "2020-09-12";
  dateValue: Date = new Date('2020-12-03');
  onChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
  }

}
