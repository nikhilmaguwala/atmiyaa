import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/home";
import Registration from "./component/register";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="register" element={ <Registration /> } />
        </Routes>
    </BrowserRouter>
  );
};

export default Layout;
