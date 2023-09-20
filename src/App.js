import React from "react";
import "../src/Css/Style.css";
import Login from "./Components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import 'react-toastify/dist/ReactToastify.css';
import HomeDetail from "./Components/Detail";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/HomeDetail/:id" element={<HomeDetail/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
