import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import TitleBar from './components/TitleBar';

function App() {
  return (
    <div>
      <TitleBar/>
      <HomePage/>
      <AboutPage/>
      <GalleryPage/>
      <ContactPage/>
    </div>
  );
}

export default App;
