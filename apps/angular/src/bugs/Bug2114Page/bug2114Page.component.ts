import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "abgov-styles",
  templateUrl: "./bug2114Page.component.html",
})
export class Bug2114PageComponent implements OnInit {
  changeForm: FormGroup;
  parents = ["One", "Two", "Three"];
  children: string[] = [];
  selectedParent = "";

  private childrenOne = ["Alpha", "Beta"];
  private childrenTwo = ["Alpha", "Beta", "Gamma"];
  private childrenThree = ["Alpha", "Gamma"];

  constructor(private fb: FormBuilder) {
    this.changeForm = this.fb.group({
      parentDropdown: [""],
      childDropdown: [""],
    });
  }

  ngOnInit() {
    this.changeForm.get("parentDropdown")?.valueChanges.subscribe((value) => {
      this.selectedParent = value;
      this.loadChildren(value);
      this.changeForm.get("childDropdown")?.reset("");
    });
  }

  loadChildren(parentValue: string) {
    switch (parentValue) {
      case "One":
        this.children = this.childrenOne;
        break;
      case "Two":
        this.children = this.childrenTwo;
        break;
      case "Three":
        this.children = this.childrenThree;
        break;
      default:
        this.children = [];
    }
  }
}
