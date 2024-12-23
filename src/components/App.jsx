// Essentials
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

// Analytics
import { Analytics } from "@vercel/analytics/react"


// Pages
import { Home } from "../pages/Home";
import { PrivacyPolicy } from "../pages/PrivacyPolicy";

const App = () => {


  return (
    <>
      <Router>
        <Analytics />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App