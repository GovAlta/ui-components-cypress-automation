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
import { Bug1734PageComponent } from "apps/angular/src/bugs/Bug1734Page/bug1734Page.component";
import { Bug1739PageComponent } from "apps/angular/src/bugs/Bug1739Page/bug1739Page.component";
import { Bug1758PageComponent } from "apps/angular/src/bugs/Bug1758Page/bug1758Page.component";
import { Bug1960PageComponent } from "apps/angular/src/bugs/Bug1960Page/bug1960Page.component";
import { Bug1266PageComponent } from "apps/angular/src/bugs/Bug1266Page/bug1266Page.component";
import { Bug1494PageComponent } from "apps/angular/src/bugs/Bug1494Page/bug1494Page.component";
import { Bug2044PageComponent } from "apps/angular/src/bugs/Bug2044Page/bug2044Page.component";
import { Bug1867PageComponent } from "apps/angular/src/bugs/Bug1867Page/bug1867Page.component";
import { Bug1796PageComponent } from "apps/angular/src/bugs/Bug1796Page/bug1796Page.component";
import { Bug1598PageComponent } from "apps/angular/src/bugs/Bug1598Page/bug1598Page.component";
import { Bug1577PageComponent } from "apps/angular/src/bugs/Bug1577Page/bug1577Page.component";
import { Bug1532PageComponent } from "apps/angular/src/bugs/Bug1532Page/bug1532Page.component";
import { Bug1453PageComponent } from "apps/angular/src/bugs/Bug1453Page/bug1453Page.component";
import { Bug1380PageComponent } from "apps/angular/src/bugs/Bug1380Page/bug1380Page.component";
import { Bug1308PageComponent } from "apps/angular/src/bugs/Bug1308Page/bug1308Page.component";
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
{ path: "bug1734", component: Bug1734PageComponent },
{ path: "bug1739", component: Bug1739PageComponent },
{ path: "bug1758", component: Bug1758PageComponent },
{ path: "bug1960", component: Bug1960PageComponent },
{ path: "bug1266", component: Bug1266PageComponent },
{ path: "bug1494", component: Bug1494PageComponent },
{ path: "bug2044", component: Bug2044PageComponent },
{ path: "bug1867", component: Bug1867PageComponent },
{ path: "bug1796", component: Bug1796PageComponent },
{ path: "bug1598", component: Bug1598PageComponent },
{ path: "bug1577", component: Bug1577PageComponent },
{ path: "bug1532", component: Bug1532PageComponent },
{ path: "bug1453", component: Bug1453PageComponent },
{ path: "bug1380", component: Bug1380PageComponent },
{ path: "bug1308", component: Bug1308PageComponent },
/*Add New Route Here*/
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
