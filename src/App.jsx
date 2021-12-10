import React from 'react'
import {Routes, Route, Link} from "react-router-dom";
import {Layout, Typography, Space} from "antd" 
import {Navbar, Exchanges, Cryptocurrencies, Cryptodetails, News, Homepage} from "./Components"
import "./App.css"
function App() {
  return (
     <div className = "app">
       <div className = "navbar">
          <Navbar/>
       </div>
       <div clasName = "main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route   path = "/" element = {<Homepage/>}/>
                  <Route  path = "/exchanges" element  = {<Exchanges/>}/>
                  <Route  path = "/news" element  = {<News/>}/>
                  <Route  path = "/crypto/:id" element  = {<Cryptodetails/>}/>
                  <Route  path = "/cryptocurrencies" element  = {<Cryptocurrencies/>}/>
                </Routes>
              </div>
            </Layout>
      
       <div className = "footer" >
             <Typography.Title level = {5} style = {{color : "white", textAlign: "center"}}>
               Cryptoverse <br/>
               All right reserved
             </Typography.Title>
             <Space>
               <Link to = "/">Home</Link>
               <Link to = "/exchnage">Exchanges</Link>
               <Link to = "/news">News</Link>
             </Space>
       </div>
       </div>
     </div>

  )
}

export default App
