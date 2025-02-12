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
import SmallParcel from './components/SmallParcel/SmallParcel';
import LoadBoard from './components/LoadBoard/LoadBoard';
import Cps from './components/Cps/Cps';
import TruckingDispatch from './components/TruckingDispatch/TruckingDispatch';
import TransportationOptimization from './components/TransportationOptimization/TransportationOptimization';
import ContactSection from './components/ContactSection/ContactSection';
import FAQGrid from './components/Faq/Faq';
import TimeManagement from './components/TimeManagement/TimeManagement';
import FinancialStability from './components/FinancialStability/FinancialStability';
import Introduction from './components/Introduction/Introduction';


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
          <Route path="/smallParcel" element={<SmallParcel />} />
          <Route path="/loadBoard" element={<LoadBoard />} />
          <Route path="/carrierPayment" element={<Cps />} />
          <Route path="/trucking-Dispatch" element={<TruckingDispatch />} />
          <Route path="/transportation" element={<TransportationOptimization />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/faq" element={<FAQGrid />} />
          <Route path="/timeManagement" element={<TimeManagement />} />
          <Route path="/financialStability" element={<FinancialStability />} />
          <Route path="/introduction" element={<Introduction />} />



        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 