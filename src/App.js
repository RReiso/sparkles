import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

export default App;
