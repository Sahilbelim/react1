import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
import Home from './home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './my_folder/Shop';
import Features from './my_folder/Features';
import Blog from './my_folder/Blog';
import About from './my_folder/About';
import Contect from './my_folder/Contect';
import Main_product from './my_folder/main_product';
import Product from './my_folder/product';
import Admin_login from './my_folder/Admin_login';
import Brand_login from './my_folder/Brand_login';
import User_login from './my_folder/User_login';
import Addtocart from './my_folder/Addtocart';
import Brandpenal from './my_folder/Brand_penal';
import AddProduct from './my_folder/Addproduct';
import Temp from './my_folder/temp';
import Navbar from './my_folder/Navbar';
// import Navbar from './my_folder/Navbar';
// import MyComponent from "./myscript.js";
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react1/" element={<Navbar />}>
          <Route path="/react1/home" element={<Home />} />
          <Route path="/react1/Shop" element={<Shop />} />
          <Route path="/react1/features" element={<Features />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/" element={<Product />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/main_product/:id" element={<Main_product />} />
          <Route path="/admin_login" element={<Admin_login />} />
          <Route path="/brand_login" element={<Brand_login />} />
          <Route path="/user_login" element={<User_login />} />
          <Route path="/addtocart" element={<Addtocart />} />
          <Route path="/brand_penal" element={<Brandpenal />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/temp" element={<Temp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(Index());