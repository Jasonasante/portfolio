import { useState } from 'react';
import './App.css';
import Loader from './components/Loader/loader';
import Portfolio from './pages/portfolio';
import HeaderNavbar from './components/header-navabar/headerNavbar';

function App() {
  const [loaded, setLoaded] = useState(false)

  function removeLoader() {
    setTimeout(() => setLoaded(true), 5000)
  }
  removeLoader()

  let component
  console.log("here", window.location)
  switch (window.location.pathname) {
    case "/":
      component = <Portfolio />
      break
    case "/bio":
      break
    case "/projects":
      break
    case "/other":
      // Component=<Other/>
      break
    default:
      component = <Portfolio />
  }

  return (
    <>
      {loaded ? (
        <>
          <HeaderNavbar />
          {component}
        </>
      ) : (
        <Loader />
      )

      }

    </>
  );
}

export default App;
