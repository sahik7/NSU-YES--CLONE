import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000); 
    return () => clearTimeout(timer); 
  }, [location]); 

  return (
    <div>
      {loading && <Loader />} 
      <Navbar />
      <div className="relative">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
