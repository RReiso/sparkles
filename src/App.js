import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" exact element={<Items />} />
        <Route path="/new" element={<Items />} />
        <Route path="/gifts" element={<Items />} />
        <Route path="/luxury" element={<Items />} />
        <Route path="/sale" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
