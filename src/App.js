import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Items from "./components/Items";
import PageNotFound from "./components/PageNotFound";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/all" element={<Items />} />
        <Route path="/new" element={<Items />} />
        <Route path="/gifts" element={<Items />} />
        <Route path="/luxury" element={<Items />} />
        <Route path="/sale" element={<Items />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </ScrollToTop>
  );
}

export default App;
