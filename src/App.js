import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import GalleryPage from './components/GalleryPage';
import AboutPage from './components/AboutPage';

function App() {
  return (
    <div>
      <HomePage/>
      <AboutPage/>
      <GalleryPage/>
    </div>
  );
}

export default App;
