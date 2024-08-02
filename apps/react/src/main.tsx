import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './app/app';

import Bug1142Page from "./bugs/Bug1142Page";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/bugs/1142" element={<Bug1142Page />}></Route>
{/** Add more routes here */}

        </Routes>
      </BrowserRouter>
    </StrictMode>
);
