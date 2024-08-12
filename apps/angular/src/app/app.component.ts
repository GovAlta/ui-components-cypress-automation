import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: ``,
})
export class AppComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
  ) {
  }
  ngOnInit() {
  }

}
