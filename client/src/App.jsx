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


function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/flatbed" element={<FlatbedShipping />} />
          <Route path="/TemperatureControlledShipping" element={<TemperatureControlledShipping />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;