import React from "react";
import HomePage from "./routes/HomePage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import OurWork from "./routes/OurWork";
import ContactUs from "./routes/ContactUs";
import { Route, Routes, useLocation } from "react-router-dom";
import MovieDetail from "./routes/MovieDetail";

//Animation
import {AnimatePresence} from "framer-motion"

function App() {
  const location = useLocation();
  console.log(location)
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />}/>
          <Route path="/ourwork" element={<OurWork />}/>
          <Route path="/ContactUs" element={<ContactUs />}/>
          <Route path="/ourwork/:id" element={<MovieDetail />}/>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
