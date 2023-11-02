import "./App.scss";
import { React, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./Main";
import Npsw from "./components/Npsw";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="npsw" element={<Npsw />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
