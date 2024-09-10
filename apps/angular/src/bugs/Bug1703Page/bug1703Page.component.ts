import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1703Page.component.html",
})
export class Bug1703PageComponent {

  value: string = "";
  text: string = "";
  onChange(event: Event) {
    this.value = (event as CustomEvent).detail.value;
    this.text = "onChange function is called, value is " + this.value ;
  }

  onKeyPress(event: Event) {
    this.value = (event as CustomEvent).detail.value;
    this.text = "onKeyUp function is called, value is " + this.value ;
  }

}
