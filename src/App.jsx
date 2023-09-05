import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader/loader';
import Portfolio from './pages/portfolio';
import HeaderNavbar from './components/header-navabar/headerNavbar';
import BottomNavBar from './components/navbar/navbar';
import Biography from './pages/bio';
import Projects from './pages/projects';
import Other from './pages/other';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    function removeLoader() {
      setTimeout(() => setLoaded(true), 5000);
    }
    removeLoader();
  }, []);

  return (
    <>
      {loaded ? (
        <>
          <HeaderNavbar />
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/bio" element={<Biography />} />
            <Route path="/other" element={<Other />} />
          </Routes>
          <BottomNavBar />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App;
