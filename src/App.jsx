import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Auth from "./pages/Auth"
import Transport from "./pages/Transport"
import Work from "./pages/Work"
import Health from "./pages/Health"
import Rent from "./pages/Rent"
import RentDetails from "./pages/RentDetails"
import Settings from "./pages/Settings"
import Weather from "./pages/Weather"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<LandingPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/services/work" element={<Work/>} />  
        <Route path="/services/weather" element={ <Weather/> } />
        <Route path="/services/transport" element={<Transport/>} /> 
        <Route path="/services/health" element={<Health/>} /> 
        <Route path="/services/rent" element={<Rent/>} /> 
        <Route path="/services/rent/rentDetails/:id" element={<RentDetails/>} /> 
        <Route path="/settings" element={<Settings/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App