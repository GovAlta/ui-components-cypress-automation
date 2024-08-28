import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './app/app';

import Bug1142Page from "./bugs/Bug1142Page";
import Bug1237Page from "./bugs/Bug1237Page";
import Bug1244Page from "./bugs/Bug1244Page";
import Bug1258Page from "./bugs/Bug1258Page";
import Bug2033Page from "./bugs/Bug2033Page";
import Bug1289Page from "./bugs/Bug1289Page";
import Bug1307Page from "./bugs/Bug1307Page";
import Bug1319Page from "./bugs/Bug1319Page";

import Bug1378Page from "./bugs/Bug1378Page";
import Bug1679Page from "./bugs/Bug1679Page";
import Bug1698Page from "./bugs/Bug1698Page";
import Bug1702Page from "./bugs/Bug1702Page";
import Bug1734Page from "./bugs/Bug1734Page";
import Bug1739Page from "./bugs/Bug1739Page";
import Bug1758Page from "./bugs/Bug1758Page";
import Bug1960Page from "./bugs/Bug1960Page";
import Bug1266Page from "./bugs/Bug1266Page";
import Bug1494Page from "./bugs/Bug1494Page";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/bug1142" element={<Bug1142Page />}></Route>
          <Route path="/bug1237" element={<Bug1237Page />}></Route>
          <Route path="/bug1244" element={<Bug1244Page />}></Route>
          <Route path="/bug1258" element={<Bug1258Page />}></Route>
          <Route path="/bug2033" element={<Bug2033Page />}></Route>
          <Route path="/bug1289" element={<Bug1289Page />}></Route>
          <Route path="/bug1307" element={<Bug1307Page />}></Route>
          <Route path="/bug1319" element={<Bug1319Page />}></Route>

<Route path="/bug1378" element={<Bug1378Page />}></Route>
<Route path="/bug1679" element={<Bug1679Page />}></Route>
<Route path="/bug1698" element={<Bug1698Page />}></Route>
<Route path="/bug1702" element={<Bug1702Page />}></Route>
<Route path="/bug1734" element={<Bug1734Page />}></Route>
<Route path="/bug1739" element={<Bug1739Page />}></Route>
<Route path="/bug1758" element={<Bug1758Page />}></Route>
<Route path="/bug1960" element={<Bug1960Page />}></Route>
<Route path="/bug1266" element={<Bug1266Page />}></Route>
<Route path="/bug1494" element={<Bug1494Page />}></Route>
{/** Add more routes here */}

        </Routes>
      </BrowserRouter>
    </StrictMode>
);
