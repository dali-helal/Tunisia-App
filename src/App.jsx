import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Auth from "./pages/Auth"

const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<LandingPage />} />
          <Route path="/home-page" element={<HomePage/>} />
          <Route path="/auth" element={ <Auth/> }  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
