// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home , Love , Partner , Death , Children} from './pages';
import './assets/css/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/love-predictor" element={<Love />} />
        <Route path="/partner-predictor" element={<Partner />} />
        <Route path="/death-predictor" element={<Death />} />
        <Route path="/children-predictor" element={<Children />} />
      </Routes>
    </Router>
  );
}

export default App;
