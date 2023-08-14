import { useState, useEffect } from 'react';
import './App.css';
import Loader from './components/Loader/loader';
import Portfolio from './pages/portfolio';
import HeaderNavbar from './components/header-navabar/headerNavbar';
import BottomNavBar from './components/navbar/navbar';
import Biography from './pages/bio';
import Projects from './pages/projects';
import Other from './pages/other';

function App() {
  const [loaded, setLoaded] = useState(false)
  const [component, setComponent] = useState(<Portfolio />)

  useEffect(() => {
    function removeLoader() {
      setTimeout(() => setLoaded(true), 5000);
    }
    removeLoader();
  }, []);

  window.onhashchange = (evt) => {
    let page = evt.newURL.split("/").at(-1)
    switch (page) {
      case "":
        setComponent(<Portfolio />)
        break
      case "bio":
        setComponent(<Biography />)
        break
      case "other":
        setComponent(<Other />)
        break
      default:
        setComponent(<Portfolio />)
    }
  }
  // console.log(window.location.href)
  // useEffect(() => {
  //   if (window.location.href.includes("#")) {
  //     window.location.href = window.location.pathname
  //   }
  // }, [loaded])

  useEffect(() => {
    switch (window.location.href.split("/").at(-1)) {
      case "":
        setComponent(<Portfolio />)
        break
      case "bio":
        setComponent(<Biography />)
        break
      case "other":
        setComponent(<Other />)
        break
      default:
        setComponent(<Portfolio />)
    }
  }, [loaded])


  return (
    <>
      {loaded ? (
        <>
          <HeaderNavbar />
          {component}
          <BottomNavBar />
          <div id='bottom'></div>
        </>
      ) : (
        <Loader />
      )

      }

    </>
  );
}

export default App;
