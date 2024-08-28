import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Offers from './components/Offers.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Offers />
      <About />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
