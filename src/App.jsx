import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Auth/Login';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/*' element={<NotFound />} />

          <Route path='/auth/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App