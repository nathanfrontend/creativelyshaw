import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Home, Cryptocurrencies, News, Exchanges, CryptoDetails } from "./Components";
import 'antd/dist/antd.css'
import { Typography, Layout } from "antd";
import { textAlign } from "@mui/system";
import {store} from './app/store'
import {Provider} from 'react-redux'
function App() {
  const [load, setLoad] = useState(true);

  return (
    <div className="app">
      <Provider store={store}>

     
      <Router>
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main"> 
        <Layout>
          <div className="routes">

          
        <Routes>
        <Route exact 
          path='/'
          element={<Home/>}/>
          <Route exact 
          path='/Cryptocurrencies'
          element={<Cryptocurrencies/>}/>
          <Route exact 
          path='/News'
          element={<News/>}/>
          <Route exact 
          path='/Exchanges'
          element={<Exchanges/>}/>
          <Route exact 
          path="/crypto/:coinId"
          element={<CryptoDetails/>}/>
         
        </Routes>
        </div>
        </Layout>
        <div className='footer'> 
        <Typography.Title level={5} style={{color:'white', textAlign:'center' }}>
          Cryptoverse <br/>
          All rights reserved
        </Typography.Title>
      </div>
        </div>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
