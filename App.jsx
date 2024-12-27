import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import icon from './assets/icon.jpg';
import mapImage from './assets/map.jpg';
import profileIcon from './assets/ProfileIcon.jpg';
import ProductShowCase from './commponents/ProductShowCase';
import Testimonial from './commponents/Testimonial';
import Hero from './commponents/Hero';
import Footer from './commponents/Footer';
import ProfileNavigation from './commponents/ProfileNavigation';
import Login from './commponents/Login';
import Createaccount from './commponents/Createaccount';

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <nav className="flex items-center justify-between p-4 border-b relative">
          <h1 className="text-2xl font-semibold text-blue-500">Kedai Manang</h1>
          <div className="hidden md:flex items-center text-gray-400 gap-10 text-lg mx-auto">
            {[
              { label: 'Lokasi', id: 'location' },
              { label: 'Menu', id: 'menu' },
              { label: 'Testimoni', id: 'testimonials' },
              { label: 'Kontak', id: 'contact' },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition duration-200 hover:scale-105 hover:shadow-lg"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 sm:relative sm:top-auto sm:transform-none">
            <ProfileNavigation profileIcon={profileIcon} />
          </div>
        </nav>

        <div id="location" className="bg-blue-600 text-white py-6 px-6 flex flex-col md:flex-row items-center justify-between mx-4 md:mx-10 my-10 rounded-lg gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-white/20 p-2 rounded-lg">
              <img src={icon} alt="Icon" className="w-12 h-12" />
            </div>
            <div>
              <p className="font-semibold">Kedai Sudah Buka</p>
              <p className="text-sm text-blue-100">17:00 - 22:00 WIB</p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-blue-600 px-8 py-2 rounded-lg text-sm font-semibold hover:bg-blue-200 transition-colors">
              Lihat lokasi toko →
            </button>
          </a>
        </div>

        <div className="max-w-3xl mx-auto text-center px-4 py-12">
          <p className="text-lg mb-4 text-gray-600">Halo, Selamat Datang!</p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Kedai kami adalah <span className="text-blue-600 font-semibold">solusi</span> segala macam perut lapar 😆
          </h2>
          <p className="text-gray-600">
            Lokasi strategis untuk Anda yang ingin pergi kemana-mana
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-4 mb-8">
          <a
            href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg overflow-hidden block"
          >
            <img src={mapImage} alt="Store Location Map" className="w-full h-auto object-cover" />
          </a>
        </div>

        <div className="px-4 sm:px-16 pb-16">
          <a
            href="https://www.google.com/maps/place/Kedai+Manang+(Churros,+Corndog,+Citul,+Otak-otak+crispy)/@-7.0060695,110.4187903,15z/data=!4m6!3m5!1s0x2e708d2fd7afca71:0x921193cb14508ddb!8m2!3d-7.0112853!4d110.4365921!16s%2Fg%2F11kpnvp_7c?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Lihat lokasi toko →
            </button>
          </a>
        </div>

        <div id="menu">
          <ProductShowCase />
        </div>

        <div id="testimonials">
          <Testimonial />
        </div>

        <Hero />

        <div id="contact">
          <Footer />
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/createaccount" element={<Createaccount />} />
          <Route path="/profile" element={<div>Profile Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

