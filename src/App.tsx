import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavigationProvider } from './components/navigation/NavigationContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/navigation/ScrollToTop';
import { serviceRoutes } from './routes/serviceRoutes';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { About } from './components/sections/About';
import { Team } from './components/sections/Team';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';
import { GoogleAnalytics } from './components/analytics/GoogleAnalytics';

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Team />
      <Blog />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <NavigationProvider>
        <ScrollToTop />
        <GoogleAnalytics measurementId="G-MMMNTBXCQ0" />
        <div className="min-h-screen bg-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            {serviceRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
          <Footer />
        </div>
      </NavigationProvider>
    </Router>
  );
}

export default App;