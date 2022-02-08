import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Items from "./components/Items";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Items category="all" />} />
        <Route path="/new" element={<Items category="new" />} />
        <Route path="/engagement" element={<Items category="engagement" />} />
        <Route path="/luxury" element={<Items category="luxury" />} />
        <Route path="/sale" element={<Items category="sale" />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
