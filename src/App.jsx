import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import Auth from "./pages/Auth"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<LandingPage />} />
        <Route path="/home-page" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App