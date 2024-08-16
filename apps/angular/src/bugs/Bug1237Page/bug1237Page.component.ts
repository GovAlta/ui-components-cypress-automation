import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1237Page.component.html",
})
export class Bug1237PageComponent {
  public options = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  public formControl = new FormControl<string | null>(null);

  constructor() {}

  ngOnInit(): void {
    this.formControl.valueChanges.subscribe((value) => {
      console.log(`formControl Received value: ${value}`);
      if (!value) {
        return;
      }
    });
  }
}
