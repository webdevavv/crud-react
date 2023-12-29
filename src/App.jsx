import "./App.css";
import { Button } from "semantic-ui-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddEditor from "./pages/AddEditor";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEditor />} />
          <Route path="/update/:id" element={<AddEditor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
