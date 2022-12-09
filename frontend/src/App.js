import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Addproduct from "./components/Addproduct";
import Updateproduct from "./components/Updateproduct";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route element={<PrivateComponent />}>
          <Route path="/" element={<Products/>} />
          <Route path="/add-product" element={<Addproduct />} />
          <Route path="/update-product/:id" element={<Updateproduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
