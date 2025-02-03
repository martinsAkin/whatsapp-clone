import Whatsapp from "./components/Whatsapp"
import Status from "./components/StatusComponent"
import Community from "./components/CommuntiyComponent"
import CallHistory from "./components/Calls"
import Footer from "./components/Footer"
// import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"


function App() {

  return (
    <>

      <Router>
        <Routes>
            <Route path="/chats" element={<Whatsapp />} />
            <Route path="/status" element={<Status />} />
            <Route path="/communities" element={<Community />} />
            <Route path="/calls" element={<CallHistory />} />

            <Route path="/" element={<Navigate to='/chats' />} />
        </Routes>
        
        <Footer /> 
      </Router>
  
     
    </>
  )
}

export default App
