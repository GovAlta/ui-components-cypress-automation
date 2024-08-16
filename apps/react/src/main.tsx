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
{/** Add more routes here */}

        </Routes>
      </BrowserRouter>
    </StrictMode>
);
