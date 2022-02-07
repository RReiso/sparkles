import { useState } from "react";
import Header from "./components/Header";
import "./styles/App.scss";

function App() {
  const [category, setCategory] = useState("All");

  return (
    <div className="App">
      <Header setCurrentCategory={setCategory} />
      {category}
    </div>
  );
}

export default App;
