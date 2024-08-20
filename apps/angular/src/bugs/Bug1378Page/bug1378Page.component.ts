import { Component } from "@angular/core";
import { FormControl } from '@angular/forms';

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1378Page.component.html",
})
export class Bug1378PageComponent {

  public options = [
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  onChangeInitialValue = 2;
  formControlInitialValue = 3;

  onChange(event: Event) {
    this.onChangeInitialValue = this.onChangeInitialValue * 2
  }

  public formControl = new FormControl<string | null>(null);

  ngOnInit() {
    this.formControl.valueChanges.subscribe((value) => {
      this.formControlInitialValue = this.formControlInitialValue * 2
    })
  }


}
