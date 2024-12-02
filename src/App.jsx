// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Love, Partner, Death, Children, PartnerSuccess , PartnerResult , LoveResult , DeathResult , ChildrenResult } from './pages';
import './assets/css/index.css'
import { motion, AnimatePresence } from "motion/react"

function App() {
  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/love-predictor" element={<Love />} />
          <Route path="/love-predictor/result" element={<LoveResult />} />
          <Route path="/partner-predictor" element={<Partner />} />
          <Route path="/partner-predictor/success" element={<PartnerSuccess />} />
          <Route path="/partner-predictor/result" element={<PartnerResult />} /> 
          <Route path="/death-predictor" element={<Death />} />
          <Route path="/death-predictor/result" element={<DeathResult />} />
          <Route path="/children-predictor" element={<Children />} />
          <Route path="/children-predictor/result" element={<ChildrenResult />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}

export default App;
