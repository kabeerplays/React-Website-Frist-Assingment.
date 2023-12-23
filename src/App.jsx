import React, { useState } from "react";
import "./App.css";
import CardSection from "./components/CardSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import product from "./components/product";
import SignUpForm from "./components/SignUpForm";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import About from "./components/About";
import { Routes, Route, } from "react-router-dom";
import Login from "./components/Login";


function App() {

  return (
    <>
      {/* <SplashScreen /> */}
      {/* <Navbar brand="SCE" /> */}
      {/* <SignUpForm/> */}
      {/* <CardSection data={product}/> */}


      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signupform" element={<SignUpForm />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer/>



      
    </>
  );
}

export default App;
