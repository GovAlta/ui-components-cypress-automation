import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

import {NgForOf, NgIf} from "@angular/common";
import { AngularComponentsModule } from "@abgov/angular-components";
import "@abgov/web-components";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule }  from './app.routes';
import { AppComponent } from './app.component';
import { Bug1142PageComponent } from "apps/angular/src/bugs/Bug1142Page/bug1142Page.component";
import { Bug1237PageComponent } from "apps/angular/src/bugs/Bug1237Page/bug1237Page.component";
import { Bug1244PageComponent } from "apps/angular/src/bugs/Bug1244Page/bug1244Page.component";
import { Bug1258PageComponent } from "apps/angular/src/bugs/Bug1258Page/bug1258Page.component";
import { Bug9999PageComponent } from "apps/angular/src/bugs/Bug9999Page/bug9999Page.component";
import { Bug2033PageComponent } from "apps/angular/src/bugs/Bug2033Page/bug2033Page.component";
import { Bug1289PageComponent } from "apps/angular/src/bugs/Bug1289Page/bug1289Page.component";
import { Bug1307PageComponent } from "apps/angular/src/bugs/Bug1307Page/bug1307Page.component";
import { Bug1319PageComponent } from "apps/angular/src/bugs/Bug1319Page/bug1319Page.component";

/*Add New Import Here*/
@NgModule({
  declarations: [
    AppComponent,
    Bug1142PageComponent,
    Bug1237PageComponent,
    Bug1244PageComponent,
    Bug1258PageComponent,
    Bug9999PageComponent,
    Bug2033PageComponent,
    Bug1289PageComponent,
    Bug1307PageComponent,
    /*Add New Declarations Here*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgForOf,
    NgIf,
    AngularComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
