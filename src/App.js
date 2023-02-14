import React from "react";
import HomePage from "./routes/HomePage";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <HomePage />
    </div>
  );
}

export default App;
