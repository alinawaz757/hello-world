import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import ContactUs from './components/contact/ContactUs';
import NavBar from './components/navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
