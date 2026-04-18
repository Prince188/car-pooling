import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Home from './page/Home';
import OfferRide from './page/OfferRide';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Search from './page/Search';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer-ride' element={<OfferRide />} />
        <Route path='/search' element={<Search />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
