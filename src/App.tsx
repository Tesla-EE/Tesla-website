import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import ComingSoon from './pages/ComingSoon';
import './styles/globals.css';

export default function App() {
  const [isBypassed, setIsBypassed] = useState(false);

  useEffect(() => {
    // Secret bypass for committee members via browser console
    if (localStorage.getItem('tesla_override') === 'true') {
      setIsBypassed(true);
    }
  }, []);

  if (isBypassed) {
    return <Home />;
  }

  return <ComingSoon />;
}
