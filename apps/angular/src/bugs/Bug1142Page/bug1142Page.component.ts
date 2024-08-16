import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1142Page.component.html",
  styleUrls: ['./bug1142Page.component.css'],
})
export class Bug1142PageComponent {
  public optionsEmpty = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];
  public optionsNull = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  public formControlEmptyNative = new FormControl<string | null>(null);
  public formControlEmptyNonNative = new FormControl<string | null>(null);
  public formControlNullNative = new FormControl<string | null>(null);
  public formControlNullNonNative = new FormControl<string | null>(null);
  public formControlNative = new FormControl<string | null>(null);

  constructor() {}

  ngOnInit(): void {
    this.formControlEmptyNative.valueChanges.subscribe((value) => {
      console.log(`formControlEmptyNative Received value: ${value}`);
      if (!value) {
        return;
      }
    });
    this.formControlEmptyNonNative.valueChanges.subscribe((value) => {
      console.log(`formControlEmptyNonNative Received value: ${value}`);
      if (!value) {
        return;
      }
    });
    this.formControlNullNative.valueChanges.subscribe((value) => {
      console.log(`formControlNullNative Received value: ${value}`);
      if (!value) {
        return;
      }
    });
    this.formControlNullNonNative.valueChanges.subscribe((value) => {
      console.log(`formControlNullNonNative Received value: ${value}`);
      if (!value) {
        return;
      }
    });
    this.formControlNative.valueChanges.subscribe((value) => {
      console.log(`formControlNative Received value: ${value}`);
      if (!value) {
        return;
      }
    });
  }

  formControlEmptyNativeReset() {
    this.formControlEmptyNative.setValue('');
  }
  formControlEmptyNonNativeReset() {
    this.formControlEmptyNonNative.setValue('');
  }
  formControlNullNativeReset() {
    this.formControlNullNative.setValue('');
  }
  formControlNullNonNativeReset() {
    this.formControlNullNonNative.setValue('');
  }
  formControlNativeReset() {
    this.formControlNative.setValue('');
  }
}
//Write Test for Native, and empty value
