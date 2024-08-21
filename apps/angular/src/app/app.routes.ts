import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { Route } from "@angular/router";
import { RouterModule } from "@angular/router";
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
/*Add New Import Here*/

export const appRoutes: Route[] = [

{ path: "bug1142", component: Bug1142PageComponent },
{ path: "bug1237", component: Bug1237PageComponent },
{ path: "bug1244", component: Bug1244PageComponent },
{ path: "bug1258", component: Bug1258PageComponent },
{ path: "bug9999", component: Bug9999PageComponent },
{ path: "bug2033", component: Bug2033PageComponent },
{ path: "bug1289", component: Bug1289PageComponent },
{ path: "bug1307", component: Bug1307PageComponent },
{ path: "bug1319", component: Bug1319PageComponent },

{ path: "bug1378", component: Bug1378PageComponent },
{ path: "bug1445", component: Bug1445PageComponent },
{ path: "bug1679", component: Bug1679PageComponent },
{ path: "bug1698", component: Bug1698PageComponent },
{ path: "bug1702", component: Bug1702PageComponent },
/*Add New Route Here*/
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
