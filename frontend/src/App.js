import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Product from "./pages/Product";
import UserDashboard from "./pages/UserDashboard";
import Modal from "./pages/ViewProductmodal";
import Inflow from "./pages/Inflow";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignUp />} />
          <Route path="/admin"  element={<Admin />} />
          <Route path="/product" element={<Product />} />
          <Route path="/users" element={<UserDashboard />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/inflow" element={<Inflow />} />
          <Route element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
