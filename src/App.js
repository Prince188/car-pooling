import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './page/Home';
import OfferRide from './page/OfferRide';
import Search from './page/Search';
import AboutUs from './page/AboutUs';
import NotFound from './page/NotFound';
import ScrollToTop from './component/ScrollToTop';
import SearchCarSharing from './page/SearchCarSharing';
import LoginPage from './page/Login';
import RegisterPage from './page/Register';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer-ride' element={<OfferRide />} />
        <Route path='/search' element={<Search />} />
        <Route path='/About-us' element={<AboutUs />} />
        <Route path='/Search-car-sharing' element={<SearchCarSharing />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<RegisterPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
