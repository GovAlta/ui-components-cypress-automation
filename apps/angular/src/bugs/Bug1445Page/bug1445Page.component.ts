import { Component } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1445Page.component.html",
})
export class Bug1445PageComponent {
  form: FormGroup;
    colors: string[] = ['red', 'green', 'blue'];
    colorFormCtrl = new FormControl('');
    descriptionFormCtrl = new FormControl('');

    constructor() {
      this.form = new FormGroup({
        colorFormCtrl: this.colorFormCtrl,
        descriptionFormCtrl: this.descriptionFormCtrl,
      });
    }

    onSubmit() {
      this.colorFormCtrl.setValidators([Validators.required]);
      this.colorFormCtrl.updateValueAndValidity();

      this.descriptionFormCtrl.setValidators([Validators.required]);
      this.descriptionFormCtrl.updateValueAndValidity();

      this.form.markAllAsTouched();

      if (this.form.valid) {
      }
    }

    onCancel() {}
}
