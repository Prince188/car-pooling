import './App.css';
import Home from './page/Home';
import OfferRide from './page/OfferRide';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offer-ride' element={<OfferRide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
