// App.js
import React, { useState, useEffect } from 'react';
import MobileMenu from './Components/MobileMenu';
import Desktop from './Components/Desktop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Fulfillment from './Pages/Fulfillment';
import FbaPrep from './Pages/FbaPrep';
import Software from './Pages/Software';
import About from './Pages/About';
import Started from './Pages/Started';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileMenu /> : <Desktop />}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/fulfillment' element={<Fulfillment />}></Route>
          <Route path='/fba-prep' element={<FbaPrep />}></Route>
          <Route path='/software' element={<Software />}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/get-started' element={<Started/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
