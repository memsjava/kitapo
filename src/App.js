import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Portfolio } from "./components/Portfolio";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') || false);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      {
        !isLoggedIn &&
        <Portfolio />
      }

      <Projects />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
