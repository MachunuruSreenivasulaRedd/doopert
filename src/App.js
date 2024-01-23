import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginForm from './components/LoginForm'
import Profile from './components/Profile'
import Dashboard from './components/Dashboard'
import Notifications from './components/Notifications'
import Earnings from './components/Earnings'
import Home from './components/Home'
import './App.css'


const App = () => 
   (
    <BrowserRouter>
      <Routes>
         <Route exact path="/" element={<Home />}/>
         <Route exact path="/login" element={<LoginForm />}/>
         <Route exact path="/profile" element={<Profile />}/>
         <Route exact path="/myearnings" element={<Earnings />} /> 
         <Route exact path="/dashboard" element={<Dashboard />} />
         <Route exact path="/notifications" element={<Notifications />} />
      </Routes>
      </BrowserRouter>
  )
export default App;