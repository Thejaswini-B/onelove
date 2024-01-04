import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Petowner from "./Pages/Petowner";
import Petdoctor from "./Pages/Petdoctor";
import Petshop from "./Pages/Petshop";
import Petcare from "./Pages/Petcare";
import Home from "./Pages/Home";
import PageOTP from "./Pages/PageOTP";
import Login from "./Pages/Login";
import "./App.css";
import ForgotPassword from "./Pages/ForgotPassword";
import Landingpage from "./Pages/Landingpage";
import Mobilepage from "./Pages/Mobilepage";
import Dog from "./Pages/Dog";

import AboutPage from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUs";
const App = () => {
  return (
    <Router>
      <div className="app">
        {/* <h1>Welcome to Pet Profile</h1> */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/petowner" element={<Petowner />} />
          <Route path="/petdoctor" element={<Petdoctor />} />
          <Route path="/petshop" element={<Petshop />} />
          <Route path="/petcare" element={<Petcare />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/pageotp" element={<PageOTP />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/landingpage" element={<Landingpage />} />
          <Route path="/mobilepage" element={<Mobilepage />} />
          <Route path="/dog" element={<Dog />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
