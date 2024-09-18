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

import { Bug1378PageComponent } from "apps/angular/src/bugs/Bug1378Page/bug1378Page.component";
import { Bug1445PageComponent } from "apps/angular/src/bugs/Bug1445Page/bug1445Page.component";
import { Bug1679PageComponent } from "apps/angular/src/bugs/Bug1679Page/bug1679Page.component";
import { Bug1698PageComponent } from "apps/angular/src/bugs/Bug1698Page/bug1698Page.component";
import { Bug1702PageComponent } from "apps/angular/src/bugs/Bug1702Page/bug1702Page.component";
import { Bug1734PageComponent } from "apps/angular/src/bugs/Bug1734Page/bug1734Page.component";
import { Bug1739PageComponent } from "apps/angular/src/bugs/Bug1739Page/bug1739Page.component";
import { Bug1758PageComponent } from "apps/angular/src/bugs/Bug1758Page/bug1758Page.component";
import { Bug1960PageComponent } from "apps/angular/src/bugs/Bug1960Page/bug1960Page.component";
import { Bug1266PageComponent } from "apps/angular/src/bugs/Bug1266Page/bug1266Page.component";
import { Bug1494PageComponent } from "apps/angular/src/bugs/Bug1494Page/bug1494Page.component";
import { Bug2044PageComponent } from "apps/angular/src/bugs/Bug2044Page/bug2044Page.component";
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
    Bug1319PageComponent,
    Bug1378PageComponent,
    Bug1445PageComponent,
    Bug1679PageComponent,
    Bug1698PageComponent,
    Bug1702PageComponent,
    Bug1734PageComponent,
    Bug1739PageComponent,
    Bug1758PageComponent,
    Bug1960PageComponent,
    Bug1266PageComponent,
    Bug1494PageComponent,
    Bug2044PageComponent,
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
