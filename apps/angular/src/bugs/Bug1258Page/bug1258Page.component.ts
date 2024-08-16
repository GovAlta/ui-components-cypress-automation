import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1258Page.component.html",
})
export class Bug1258PageComponent {
  public options = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  public formControlNative = new FormControl<string | null>(null);
  public formControlNonNative = new FormControl<string | null>(null);

  public formControlNativeValue: string | null = '';
  public formControlNonNativeValue: string | null = '';
  constructor() {}

  ngOnInit(): void {
    this.formControlNative.valueChanges.subscribe((value) => {
      this.formControlNativeValue = value;
      if (!value) {
        return;
      }
    });
    this.formControlNonNative.valueChanges.subscribe((value) => {
      this.formControlNonNativeValue = value;
      if (!value) {
        return;
      }
    });


  }

  formControlNativeReset() {
    this.formControlNative.setValue('');
  }
  formControlNonNativeReset() {
    this.formControlNonNative.setValue('');
  }

}
//Write Test for Native, and empty value
