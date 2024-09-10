import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import Prints from './components/Prints.jsx';
import Drawings from './components/Drawings.jsx';
import About from './components/About.jsx';
import Exhibitions from './components/Exhibitions.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import en from './locales/en.json';
import ru from './locales/ru.json';

function App() {
  const [language, setLanguage] = useState('en'); // Manage language state
  const content = language === 'en' ? en : ru;

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      {/* Pass language and toggleLanguage to all components */}
      <Navbar content={content.navbar} toggleLanguage={toggleLanguage} language={language} />
      <Home content={content.home} toggleLanguage={toggleLanguage} language={language} />
      <Drawings content={content.drawings} language={language} />
      <Contact content={content.contact} language={language} />
      <Prints content={content.prints} language={language} />
      <About content={content.about} language={language} />
      <Exhibitions content={content.exhibitions} language={language} />
      <Footer content={content.footer} language={language} />
    </div>
  );
}

export default App;