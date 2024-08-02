const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the bug number (XXXX): ', (bugNumber) => {
  createAngularFiles(bugNumber);
  createReactFile(bugNumber);
  updateAngularRoutingModule(bugNumber);
  updateAngularAppModule(bugNumber);
  updateAppComponentHtml(bugNumber);
  updateReactMainTsx(bugNumber);
  updateReactAppTsx(bugNumber);
  rl.close();
});

function createAngularFiles(bugNumber) {
  const folderName = `Bug${bugNumber}Page`;
  const folderPath = path.join('apps', 'angular','src', 'bugs', folderName);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsFileName = `bug${bugNumber}Page.component.ts`;
  const htmlFileName = `bug${bugNumber}Page.component.html`;

  const tsFilePath = path.join(folderPath, tsFileName);
  const htmlFilePath = path.join(folderPath, htmlFileName);

  const tsFileContent = `
import { Component } from "@angular/core";
@Component({
  selector: "abgov-styles",
  templateUrl: "./bug${bugNumber}Page.component.html",
})
export class Bug${bugNumber}PageComponent {

}`;

  fs.writeFileSync(tsFilePath, tsFileContent.trim());
  fs.writeFileSync(htmlFilePath, `<!-- HTML content for bug${bugNumber}Page.component.html -->`);

  console.log(`Angular folder and files created successfully at ${folderPath}`);
}

function createReactFile(bugNumber) {
  const folderPath = path.join('apps', 'react', 'src', 'bugs');

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const tsxFileName = `Bug${bugNumber}Page.tsx`;
  const tsxFilePath = path.join(folderPath, tsxFileName);

  const tsFileContent = `
import React, { useState, useEffect } from 'react';
import { GoAIconButton } from "@abgov/react-components";

export default function Bug${bugNumber}Page(props) {
  return (
    <>
    </>
  )
}`;

  fs.writeFileSync(tsxFilePath, tsFileContent.trim());

  console.log(`React file created successfully at ${tsxFilePath}`);
}

function updateAngularRoutingModule(bugNumber) {
  const routingModulePath = path.join('apps', 'angular', 'src', 'app', 'app-routing.module.ts');

  if (!fs.existsSync(routingModulePath)) {
    console.error(`Routing module not found at ${routingModulePath}`);
    return;
  }

  let routingModuleContent = fs.readFileSync(routingModulePath, 'utf-8');

  const importStatement = `import { Bug${bugNumber}PageComponent } from "apps/angular/src/bugs/Bug${bugNumber}Page/bug${bugNumber}Page.component";`;
  const routeConfig = `{ path: "bug${bugNumber}", component: Bug${bugNumber}PageComponent },`;

  const importInsertRegex = /\/\*Add New Import Here\*\//;
  const routeInsertRegex = /\/\*Add New Route Here\*\//;

  routingModuleContent = routingModuleContent.replace(importInsertRegex, `${importStatement}\n/*Add New Import Here*/`);
  routingModuleContent = routingModuleContent.replace(routeInsertRegex, `${routeConfig}\n/*Add New Route Here*/`);

  fs.writeFileSync(routingModulePath, routingModuleContent);

  console.log(`Routing module updated successfully at ${routingModulePath}`);
}

function updateAngularAppModule(bugNumber) {
  const appModulePath = path.join('apps', 'angular', 'src', 'app', 'app.module.ts');

  if (!fs.existsSync(appModulePath)) {
    console.error(`App module not found at ${appModulePath}`);
    return;
  }

  let appModuleContent = fs.readFileSync(appModulePath, 'utf-8');

  const importStatement = `import { Bug${bugNumber}PageComponent } from "apps/angular/src/bugs/Bug${bugNumber}Page/bug${bugNumber}Page.component";`;
  const declaration = `Bug${bugNumber}PageComponent,`;

  const importInsertRegex = /\/\*Add New Import Here\*\//;
  const declarationInsertRegex = /\/\*Add New Declarations Here\*\//;

  appModuleContent = appModuleContent.replace(importInsertRegex, `${importStatement}\n/*Add New Import Here*/`);
  appModuleContent = appModuleContent.replace(declarationInsertRegex, `${declaration}\n    /*Add New Declarations Here*/`);

  fs.writeFileSync(appModulePath, appModuleContent);

  console.log(`App module updated successfully at ${appModulePath}`);
}



function updateAppComponentHtml(bugNumber) {
  const appComponentHtmlPath = path.join('apps', 'angular', 'src', 'app', 'app.component.html');

  if (!fs.existsSync(appComponentHtmlPath)) {
    console.error(`App component HTML file not found at ${appComponentHtmlPath}`);
    return;
  }

  let appComponentHtmlContent = fs.readFileSync(appComponentHtmlPath, 'utf-8');
  const newLink = `<a routerLink="/bug${bugNumber}"> bug${bugNumber} </a>`;

  const insertBefore = '<!-- add new links here-->';
  const insertPosition = appComponentHtmlContent.indexOf(insertBefore);

  if (insertPosition !== -1) {
    appComponentHtmlContent = appComponentHtmlContent.slice(0, insertPosition) + newLink + '\n' + appComponentHtmlContent.slice(insertPosition);
  }

  fs.writeFileSync(appComponentHtmlPath, appComponentHtmlContent);

  console.log(`App component HTML updated successfully at ${appComponentHtmlPath}`);
}


function updateReactMainTsx(bugNumber) {
  const mainTsxPath = path.join('apps', 'react', 'src', 'main.tsx');

  if (!fs.existsSync(mainTsxPath)) {
    console.error(`main.tsx file not found at ${mainTsxPath}`);
    return;
  }

  let mainTsxContent = fs.readFileSync(mainTsxPath, 'utf-8');

  const importStatement = `import Bug${bugNumber}Page from "./bugs/Bug${bugNumber}Page";`;
  const routeConfig = `<Route path="/bugs/${bugNumber}" element={<Bug${bugNumber}Page />}></Route>`;

  if (!mainTsxContent.includes(importStatement)) {
    const importPosition = mainTsxContent.indexOf('const root = ReactDOM.createRoot(');
    if (importPosition !== -1) {
      mainTsxContent = mainTsxContent.slice(0, importPosition) + importStatement + '\n' + mainTsxContent.slice(importPosition);
    }
  }

  if (!mainTsxContent.includes(routeConfig)) {
    const routesEndTag = '{/** Add more routes here */}';
    const routesEndPosition = mainTsxContent.indexOf(routesEndTag);
    if (routesEndPosition !== -1) {
      mainTsxContent = mainTsxContent.slice(0, routesEndPosition) + routeConfig + '\n' + mainTsxContent.slice(routesEndPosition);
    }
  }

  fs.writeFileSync(mainTsxPath, mainTsxContent);

  console.log(`main.tsx updated successfully at ${mainTsxPath}`);
}

function updateReactAppTsx(bugNumber) {
  const appTsxPath = path.join('apps', 'react', 'src', 'app', 'app.tsx');

  if (!fs.existsSync(appTsxPath)) {
    console.error(`app.tsx file not found at ${appTsxPath}`);
    return;
  }

  let appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');
  const newLink = `            <Link to="/bugs/${bugNumber}">${bugNumber}</Link>`;

  const insertBefore = '{/* Add links here */}';
  const insertPosition = appTsxContent.indexOf(insertBefore);

  if (insertPosition !== -1) {
    appTsxContent = appTsxContent.slice(0, insertPosition) + newLink + '\n' + appTsxContent.slice(insertPosition);
  }

  fs.writeFileSync(appTsxPath, appTsxContent);

  console.log(`app.tsx updated successfully at ${appTsxPath}`);
}
