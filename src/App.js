import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/About';
import Home from './components/home/Home';
import ContactUs from './components/contact/ContactUs';
import NavBar from './components/navbar/Navbar';
import { useAxios } from './utils/Network/useAxios';
import { useEffect } from 'react';

function App() {
  const { response, loading, error, CallApi } = useAxios();
  useEffect(() => {
    CallApi({
      method: 'GET',
      url: `/posts`,
    });
  }, []);
  console.log(response, loading, error);
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
