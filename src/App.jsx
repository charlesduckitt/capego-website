import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Challenge from './pages/Challenge';
import Solution from './pages/Solution';
import EconomicImpact from './pages/EconomicImpact';
import Partnership from './pages/Partnership';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1A2632] text-[#E5E5E5]">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/economic-impact" element={<EconomicImpact />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

