import { useEffect } from 'react'
import './App.css';
// import AOS from "aos";
// import "aos/dist/aos.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Main';

function App() {
  // useEffect(() => {
  //   AOS.init({
  //     // disable: 'phone',
  //     duration: 2000,
  //     once: 'true',
  //   })
  // }, [])
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
