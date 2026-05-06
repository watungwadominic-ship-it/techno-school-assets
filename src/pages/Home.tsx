import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Users, MapPin, Zap, BookOpen, Trophy, GraduationCap, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] bg-white p-6 sm:p-10 md:p-20 border-b-8 border-brand-red shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-2 text-brand-red font-black mb-6 bg-brand-red/5 w-fit px-5 py-2 rounded-full uppercase text-[10px] sm:text-xs tracking-[0.2em]">
              <Sparkles className="w-4 h-4" />
              <span>Official ZIMSEC Academy</span>
            </div>
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 text-brand-black">
              Excellence <br />
              <span className="text-brand-red underline decoration-brand-black/10">Defined.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-medium">
              Welcome to <span className="text-brand-black font-bold">Techno Group of Schools</span>. We are pioneering a new era of education in Zimbabwe, where discipline meets digital innovation.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-5">
              <Link 
                to="/about"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Our Charter
              </Link>
              <Link 
                to="/events"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                School Calendar
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-3xl bg-brand-black p-1 flex items-center justify-center relative overflow-hidden shadow-2xl border-2 border-brand-red/20 group">
               <img 
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200&auto=format&fit=crop" 
                alt="Junior school students"
                className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent opacity-80" />
              
              {/* Animated Cartoon Elements */}
              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 right-10 bg-white p-4 rounded-[1.5rem] shadow-2xl z-20 border-4 border-brand-red rotate-6 hover:scale-110 transition-transform"
              >
                <BookOpen className="w-10 h-10 text-brand-red" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
                className="absolute bottom-1/4 left-8 bg-brand-red p-4 rounded-[1.5rem] shadow-2xl z-20 border-4 border-white -rotate-12 hover:scale-110 transition-transform"
              >
                <GraduationCap className="w-10 h-10 text-white" />
              </motion.div>

              <div className="z-10 text-center text-white px-8 mt-auto mb-10">
                <div className="bg-brand-red w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-red/40 rotate-6">
                   <Star className="w-8 h-8 text-white fill-current" />
                </div>
                <h3 className="text-4xl font-display font-black tracking-tighter uppercase mb-2">100% Pass Rate</h3>
                <p className="text-brand-red font-black tracking-widest uppercase text-xs">Excellence Tradition</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Info Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {[
          { 
            title: 'Our Scholars', 
            desc: 'A elite community of learners striving for domestic and global excellence.', 
            icon: Users, 
            color: 'bg-brand-black',
            delay: 0.1 
          },
          { 
            title: 'Harare H.Q.', 
            desc: 'Strategically located in Fidelity Southview Park to serve the capital.', 
            icon: MapPin, 
            color: 'bg-brand-red',
            delay: 0.2 
          },
          { 
            title: 'STEM Focus', 
            desc: 'Merging ZIMSEC requirements with advanced digital literacy core.', 
            icon: Zap, 
            color: 'bg-brand-black',
            delay: 0.3 
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: item.delay }}
            className={`bouncy-card p-8 sm:p-10 relative overflow-hidden group`}
          >
            <div className={`${item.color} w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-white mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-300`}>
              <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 text-brand-black uppercase tracking-tight">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-500 leading-relaxed font-medium">{item.desc}</p>
            
            <div className={`absolute -right-6 -bottom-6 w-24 h-24 sm:w-32 sm:h-32 ${item.color} opacity-5 rounded-full`} />
          </motion.div>
        ))}
      </section>

      {/* Techno Fun Zone / Cartoon Style Section */}
      <section className="relative py-12 px-6 sm:py-20 sm:px-10 rounded-[2.5rem] sm:rounded-[3rem] bg-brand-red/5 border-4 border-dashed border-brand-red/20 overflow-hidden">
        {/* Cartoon Floating Decorations */}
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -top-10 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-brand-red/5 rounded-full" />
        <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute bottom-10 left-10 w-20 h-20 sm:w-24 sm:h-24 bg-brand-black/5 rounded-[2rem] rotate-12" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10">
          <div className="space-y-4">
             <div className="inline-flex items-center space-x-3 bg-brand-red text-white px-5 sm:px-6 py-2 rounded-full font-black uppercase text-[10px] sm:text-xs tracking-[0.3em] mb-2 sm:mb-4">
               <Zap className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
               <span>Junior Academy Fun</span>
             </div>
             <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black text-brand-black uppercase tracking-tighter leading-none">The Junior <br className="sm:hidden" /> <span className="text-brand-red">Techno</span> Way</h2>
             <p className="text-base sm:text-xl text-gray-500 font-medium max-w-2xl mx-auto italic">
               Where technology meets child-like wonder. We believe learning should be as exciting as a cartoon adventures!
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Robotics Club', icon: Zap, color: 'bg-brand-red' },
              { title: 'Digital Art', icon: Heart, color: 'bg-brand-black' },
              { title: 'STEM Sports', icon: Trophy, color: 'bg-brand-red' },
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
                className="bg-white p-8 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-b-8 border-brand-red/10 group cursor-pointer"
              >
                <div className={`${box.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mx-auto mb-6 sm:mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                  <box.icon className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-brand-black uppercase tracking-tight">{box.title}</h3>
                <div className="mt-4 w-10 h-1 sm:w-12 sm:h-1.5 bg-brand-red/20 mx-auto rounded-full group-hover:w-16 sm:group-hover:w-20 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Notice Board */}
      <section className="bg-brand-black rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-12 md:p-16 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/10 -skew-x-12 translate-x-1/2 hidden md:block" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">Global <br />Citizenry <br /><span className="text-brand-red">Start Here.</span></h2>
            <p className="text-base sm:text-xl text-gray-400 font-medium leading-relaxed">
              Our charter ensures that every child at Techno Group is equipped with the digital literacy and character needed for the 21st century.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 pt-2">
              <Link 
                to="/achievements" 
                className="btn-primary flex items-center justify-center space-x-3 w-full sm:w-auto"
              >
                <Trophy className="w-5 h-5" />
                <span>Scholar Laurels</span>
              </Link>
              <Link 
                to="/about" 
                className="btn-secondary text-white border-white/20 hover:bg-white/10 flex items-center justify-center space-x-3 w-full sm:w-auto"
              >
                <BookOpen className="w-5 h-5" />
                <span>Our Charter</span>
              </Link>
            </div>
          </div>
          
          <div className="relative mt-8 lg:mt-0">
            <div className="aspect-square rounded-[2rem] sm:rounded-[3rem] overflow-hidden border-4 border-brand-red/30 shadow-2xl relative max-w-md mx-auto lg:max-w-none">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop" 
                alt="Digital Learning"
                className="absolute inset-0 w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-brand-red/90 backdrop-blur-md p-8 rounded-3xl text-center shadow-2xl animate-pulse">
                  <Star className="w-12 h-12 text-white fill-current mx-auto mb-4" />
                  <div className="font-black uppercase tracking-widest text-sm">ZIMSEC Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
