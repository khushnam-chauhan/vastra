import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import {BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import Shop from './Pages/Shop'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/men" element={<ShopCategory category='men'/>}/>
        <Route path="/women" element={<ShopCategory category='women'/>}/>
        <Route path="/kids" element={<ShopCategory category='kids'/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':id' element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<LoginSignup/>} />
        

      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App
