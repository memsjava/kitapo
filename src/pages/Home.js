import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../components/NavBar';
import { Banner } from '../components/Banner';
import { Portfolio } from '../components/Portfolio';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';


function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Portfolio />
            <Projects />
            {/* <Contact /> */}
            <Footer
            />
        </div>
    );
}

export default App;
