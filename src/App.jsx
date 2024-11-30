import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./components/Home"
import About from "./components/About"
import Carrers from "./components/Carrers"
import Contact from "./components/Contact"
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Products from "./components/Products"
import ApplyForm from "./components/ApplyForm"

function App() {

  return (
    <>
      <Navbar />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/about" element = {<About />}/>
          <Route path="/career" element = {<Carrers />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/signup" element = {<Signup />}/>
          <Route path="/signin" element = {<Signin />}/>
          <Route path="/products" element = {<Products />}/>
          <Route path="/apply-form" element = {<ApplyForm />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
