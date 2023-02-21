import React from 'react';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogIn from './components/Page/LogIn';
import Register from './components/Page/Register';
import Home from './components/Page/Home';
import AddProduct from './components1/AddProduct';
import ProductsList from './components1/ProductsList';
import Updateproduct from './components1/Updateproduct';

function App() {
  return (
    <div className='App' >
      <Router>
        <Header />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/ProductsList" element={<ProductsList />} />
          <Route path="/updateproduct/:id" element={<Updateproduct />} />









        </Routes>
      </Router >
    </div>
  );
}

export default App;
