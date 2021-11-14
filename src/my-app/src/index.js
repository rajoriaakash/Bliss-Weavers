import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { category } from './components/Products';
import { SignIn } from './firebase/utils/signIn';
import SingleProductPageContent from './SingleProductPageContent';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<App></App>}></Route>
        <Route path = "signIn" element={<SignIn></SignIn>}></Route>
        <Route path = "product" element={<SingleProductPageContent></SingleProductPageContent>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
