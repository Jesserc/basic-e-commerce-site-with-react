import './App.scss';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import HomePage from './pages/Home';
import ServicesPage from './pages/Services';
import Product from './pages/product';
import NotFoundPage from './components/NotFound/NotFound';

function App() {
  return (
    <div className="layout">
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element={ <HomePage /> }/>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={ <ServicesPage />}/>
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product" element={<Product />} />
          
          <Route path="*" element={ <NotFoundPage />}/>
        </Routes>
     </Router>

    </div>
  )
}

export default App;
