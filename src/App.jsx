import Whatsapp from "./components/Whatsapp"
import Status from "./components/StatusComponent"
import Community from "./components/CommuntiyComponent"
import CallHistory from "./components/Calls"
import Footer from "./components/Footer"
// import React from "react"
import { HashRouter as Router, Routes, Route } from "react-router-dom"


function App() {

  return (
    <>

      <Router>
        <Routes>
            <Route index path="/chats" element={<Whatsapp />} />
            <Route path="/status" element={<Status />} />
            <Route path="/communities" element={<Community />} />
            <Route path="/calls" element={<CallHistory />} />

        </Routes>
        
        <Footer /> 
      </Router>
  
     
    </>
  )
}

export default App
