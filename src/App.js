import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div>
      <HomePage/>
      <AboutPage/>
      <GalleryPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
