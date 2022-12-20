import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Services/>
    <About/>
    <Plans />
    <Contact />
    <Footer/>
    </>
  );
};

export default App;