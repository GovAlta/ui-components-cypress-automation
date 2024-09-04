import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1532Page.component.html",
})
export class Bug1532PageComponent {
  value: any = "";
  onChange(event: any): void {
    this.value = event.target.value;
  }
}
