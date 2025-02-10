import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar.JSX';
import FlatbedShipping from './components/Flatbed/Flatbed';
import TemperatureControlledShipping from './components/TemperatureControlledShipping/TemperatureControlledShipping';
import Drayage from './components/Drayage/Drayage';
import PowerOnly from './components/PowerOnly/PowerOnly';
import BoxTruck from './components/BoxTruck/BoxTruck';
import TruckLoad from './components/TruckLoad/TruckLoad';
import LessthanTruckload from './components/LessthanTruckload/LessthanTruckload';
import InterModal from './components/InterModal/InterModal';
import CrossBorder from './components/CrossBorder/CrossBorder';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/flatbed" element={<FlatbedShipping />} />
          <Route path="/temperature-controlled" element={<TemperatureControlledShipping />} />
          <Route path="/drayage" element={<Drayage />} />
          <Route path="/power-only" element={<PowerOnly />} />
          <Route path="/box-Truck" element={<BoxTruck />} />
          <Route path="/truck-Load" element={<TruckLoad />} />
          <Route path="/lst" element={<LessthanTruckload />} />
          <Route path="/intermodal" element={<InterModal />} />
          <Route path="/crossBorder" element={<CrossBorder />} />




        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;