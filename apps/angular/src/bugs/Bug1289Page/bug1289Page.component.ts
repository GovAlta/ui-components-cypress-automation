import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug1289Page.component.html",
  styleUrls: ['./bug1289Page.component.css'],
})
export class Bug1289PageComponent {
  public selected: string | null = null;

  public options = [
    { value: '', label: '' },
    { value: 'opt1', label: 'Option 1' },
    { value: 'opt2', label: 'Option 2' },
    { value: 'opt3', label: 'Option 3' },
    { value: 'opt4', label: 'Option 4' },
  ];

  onChange(event: any): void {
    this.selected = event.target.value;
  }
}
