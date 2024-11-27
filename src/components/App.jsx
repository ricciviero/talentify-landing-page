// Essentials
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { Navbar } from "./Navbar";

// Pages
import { Home } from "../pages/Home";

const App = () => {


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Router>
    </>
  )
}

export default App