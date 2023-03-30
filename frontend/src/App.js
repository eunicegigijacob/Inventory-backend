import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/admin"  element={<Admin />} />
          <Route path="/product"  element={<Product />} />
          <Route element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
