import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1960Page.component.html",
})
export class Bug1960PageComponent {


    initialValue = 2;

    onChange(event: Event) {
      this.initialValue = this.initialValue * 2
    }


}
