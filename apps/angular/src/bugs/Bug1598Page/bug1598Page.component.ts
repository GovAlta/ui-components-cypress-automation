import { Component } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1598Page.component.html",
})
export class Bug1598PageComponent {

  formGroup = new FormGroup({
    txtRequesterName: new FormControl(),
  })

  searchRequesterClickIcon() {
    console.log(this.formGroup.get("txtRequesterName")?.value);
    this.formGroup.get("txtRequesterName")?.patchValue("");
    console.log(this.formGroup.get("txtRequesterName")?.value);
  }
}
