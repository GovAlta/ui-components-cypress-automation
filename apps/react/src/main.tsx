import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './app/app';

import Bug1142Page from "./bugs/Bug1142Page";
import Bug1237Page from "./bugs/Bug1237Page";
import Bug1244Page from "./bugs/Bug1244Page";
import Bug1258Page from "./bugs/Bug1258Page";
import Bug9999Page from "./bugs/Bug9999Page";
import Bug2033Page from "./bugs/Bug2033Page";
import Bug1289Page from "./bugs/Bug1289Page";
import Bug1307Page from "./bugs/Bug1307Page";
import Bug1319Page from "./bugs/Bug1319Page";

import Bug1378Page from "./bugs/Bug1378Page";
import Bug1445Page from "./bugs/Bug1445Page";
import Bug1679Page from "./bugs/Bug1679Page";
import Bug1698Page from "./bugs/Bug1698Page";
import Bug1702Page from "./bugs/Bug1702Page";
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
          <Route path="/bug9999" element={<Bug9999Page />}></Route>
          <Route path="/bug2033" element={<Bug2033Page />}></Route>
          <Route path="/bug1289" element={<Bug1289Page />}></Route>
          <Route path="/bug1307" element={<Bug1307Page />}></Route>
          <Route path="/bug1319" element={<Bug1319Page />}></Route>

<Route path="/bug1378" element={<Bug1378Page />}></Route>
<Route path="/bug1445" element={<Bug1445Page />}></Route>
<Route path="/bug1679" element={<Bug1679Page />}></Route>
<Route path="/bug1698" element={<Bug1698Page />}></Route>
<Route path="/bug1702" element={<Bug1702Page />}></Route>
{/** Add more routes here */}

        </Routes>
      </BrowserRouter>
    </StrictMode>
);
