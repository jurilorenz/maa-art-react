import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Prints from './components/Prints.jsx';
import Drawings from './components/Drawings.jsx';
import About from './components/About.jsx';
import Exhibitions from './components/Exhibitions.jsx';
import Contact from './components/Contact.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Drawings />
      <Prints />
      <About />
      <Exhibitions />
      <Contact />
    </div>
  );
}

export default App;
