import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { HashRouter} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Marie from "./pages/Marie";
import AmbientPC from "./pages/AmbientPC";
import Kidspace from "./pages/Kidspace";
import Smarttoy from "./pages/Smarttoy";


const App = () => {
    return(
        <>
          <BrowserRouter>
            <Routes>
              <Route index element = {<Home />}></Route>
              <Route path = "/marie" element = {<Marie />}></Route>
              <Route path = "/ambientpc" element = {<AmbientPC />}></Route>
              <Route path = "/kidspace" element = {<Kidspace />}></Route>
              <Route path = "/smarttoy" element = {<Smarttoy />}></Route>
            </Routes>
          </BrowserRouter>

        </>
    )
}

export default App