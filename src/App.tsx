import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, Trophy, Calendar, BookOpen, Menu, X, GraduationCap, Zap, MapPin, Phone, Mail } from 'lucide-react';
import Home from './pages/Home';
import Achievements from './pages/Achievements';
import Events from './pages/Events';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const navItems = [
  { name: 'Home', path: '/', icon: HomeIcon, color: 'text-brand-red' },
  { name: 'Gallery', path: '/gallery', icon: Zap, color: 'text-brand-red' },
  { name: 'Achievements', path: '/achievements', icon: Trophy, color: 'text-brand-red' },
  { name: 'News & Events', path: '/events', icon: Calendar, color: 'text-brand-red' },
  { name: 'Our Charter', path: '/about', icon: BookOpen, color: 'text-brand-red' },
  { name: 'Contact', path: '/contact', icon: MapPin, color: 'text-brand-red' },
];

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b-2 border-brand-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-brand-red p-1.5 sm:p-2 rounded-lg shadow-md shrink-0">
              <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-lg sm:text-xl font-black tracking-tight text-brand-black uppercase">
                TECHNO GROUP
              </span>
              <span className="text-[9px] sm:text-xs font-bold text-brand-red tracking-widest uppercase">
                Of Schools
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 lg:px-4 py-2 rounded-lg transition-all font-semibold text-sm xl:text-base ${
                    isActive 
                      ? `bg-brand-red text-white shadow-lg shadow-brand-red/20` 
                      : 'text-gray-600 hover:bg-brand-gray'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 sm:p-2.5 rounded-xl bg-brand-gray text-brand-black hover:bg-gray-200 transition-colors border-2 border-transparent active:border-brand-red/20"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b-2 border-brand-black/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 max-w-2xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-6 py-4 rounded-2xl transition-all ${
                        isActive 
                          ? 'bg-brand-red text-white shadow-xl shadow-brand-red/20 scale-[1.02]' 
                          : 'text-gray-700 bg-brand-gray/50 hover:bg-brand-gray'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-white/20' : 'bg-brand-red/10 text-brand-red'}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-bold uppercase text-xs tracking-widest">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-brand-gray">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 pointer-events-auto">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/gallery" element={<PageTransition><Gallery /></PageTransition>} />
              <Route path="/achievements" element={<PageTransition><Achievements /></PageTransition>} />
              <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <footer className="bg-brand-black text-white py-16 px-6 sm:px-8 mt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            <div className="space-y-6">
              <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-red uppercase tracking-tighter">Techno Group of Schools</h3>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                Nurturing the pride of Zimbabwe through excellence in primary education. Professional ZIMSEC Examination Centre focusing on holistic digital and academic growth.
              </p>
            </div>
            <div className="lg:justify-self-center">
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest border-b-2 border-brand-red w-fit pb-1">Contact Details</h4>
              <div className="space-y-4 text-gray-400 text-sm md:text-base">
                <p className="flex items-center space-x-3"><MapPin className="w-4 h-4 text-brand-red shrink-0" /> <span>Fidelity Southview Park, Harare, Zimbabwe</span></p>
                <p className="flex items-center space-x-3"><Phone className="w-4 h-4 text-brand-red shrink-0" /> <span>Tel: +263 77 555 0123</span></p>
                <p className="flex items-center space-x-3"><Mail className="w-4 h-4 text-brand-red shrink-0" /> <span>Email: admin@technogroup.ac.zw</span></p>
              </div>
            </div>
            <div className="flex flex-col lg:items-end">
              <div className="w-full lg:w-fit">
                <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-widest border-b-2 border-brand-red w-fit pb-1">Quick Links</h4>
                <nav className="flex flex-col space-y-3 text-gray-400 text-sm md:text-base">
                  <Link to="/about" className="hover:text-brand-red transition-colors flex items-center space-x-2"><span>Vision & Mission</span></Link>
                  <Link to="/events" className="hover:text-brand-red transition-colors flex items-center space-x-2"><span>School Calendar</span></Link>
                  <Link to="/achievements" className="hover:text-brand-red transition-colors flex items-center space-x-2"><span>Student Laurels</span></Link>
                </nav>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/10 text-center text-gray-500 text-[10px] sm:text-xs tracking-[0.2em] uppercase">
            © {new Date().getFullYear()} Techno Group of Schools. Registered ZIMSEC Centre.
          </div>
        </footer>
      </div>
    </Router>
  );
}
