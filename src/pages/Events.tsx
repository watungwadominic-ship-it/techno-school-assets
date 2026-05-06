import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin, Coffee, Users, Bell, Zap, Star } from 'lucide-react';
import { SchoolEvent } from '../types';

const events: SchoolEvent[] = [
  {
    id: '1',
    title: 'Inter-House Sports Day',
    date: 'May 20, 2026',
    time: '08:00 AM - 03:00 PM',
    location: 'Main Sports Complex',
    description: 'A day of athletics, teamwork, and fun! Parents are encouraged to bring lunch baskets and wear house colors.',
  },
  {
    id: '2',
    title: 'Mid-Term Parent Consultation',
    date: 'June 05, 2026',
    time: '02:00 PM - 05:00 PM',
    location: 'Individual Classrooms',
    description: 'One-on-one sessions to discuss student progress and ZIMSEC preparation.',
  },
  {
    id: '3',
    title: 'Grade 7 ZIMSEC Seminar',
    date: 'June 18, 2026',
    time: '09:00 AM - 12:00 PM',
    location: 'The Great Hall',
    description: 'Mandatory mock preparation workshop for all Grade 7 candidates.',
  },
  {
    id: '4',
    title: 'Roots Cultural Festival',
    date: 'July 10, 2026',
    time: '10:00 AM - 04:00 PM',
    location: 'School Grounds',
    description: 'Celebrating our rich Zimbabwean heritage through song, dance, and traditional food.',
  },
];

export default function Events() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      <header className="text-center space-y-6 relative py-8 sm:py-10 px-4">
        {/* Cartoon Background Elements */}
        <div className="absolute top-0 left-1/4 w-20 h-20 bg-brand-red/5 rounded-full blur-xl animate-pulse" />
        
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 4 }}
          className="relative inline-block p-6 sm:p-8 bg-brand-black rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] mb-4 border-4 border-white"
        >
          <Calendar className="w-12 h-12 sm:w-16 sm:h-16 text-brand-red" />
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-brand-red text-white p-2 rounded-xl shadow-lg border-2 border-white">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          </div>
        </motion.div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-brand-black uppercase tracking-tighter leading-none px-4">Academic <br className="sm:hidden" /> <span className="text-brand-red underline decoration-brand-black/10">Calendar</span></h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-medium italic px-4">
          Buckle up for a term full of discovery, digital innovation, and academic triumphs!
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-8 px-4">
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-[2rem] sm:rounded-[2.5rem] p-1.5 sm:p-2 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all shadow-xl overflow-hidden border-2 border-transparent hover:border-brand-red/20"
          >
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 p-6 sm:p-10">
              {/* Date Box - Cartoonish Style */}
              <div className="shrink-0 flex md:flex-col items-center justify-center p-6 sm:p-8 bg-brand-black rounded-[1.5rem] sm:rounded-[2rem] md:w-40 border-4 border-brand-red shadow-lg group-hover:rotate-3 transition-transform">
                <span className="text-3xl sm:text-4xl font-black text-white leading-none">{event.date.split(' ')[1].replace(',', '')}</span>
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-brand-red mt-1 leading-none">{event.date.split(' ')[0]}</span>
                <div className="hidden md:block mt-4 w-8 h-1 bg-white/20 rounded-full" />
              </div>

              {/* Details */}
              <div className="flex-1 space-y-4 sm:space-y-6 text-center md:text-left">
                <div className="flex justify-center md:justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center justify-center md:justify-start space-x-2 text-brand-red font-black uppercase text-[9px] sm:text-[10px] tracking-widest">
                       <Star className="w-3 h-3 fill-current" />
                       <span>Upcoming Event</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-brand-black uppercase tracking-tight leading-[1.1] md:leading-[0.9] group-hover:text-brand-red transition-colors">
                      {event.title}
                    </h3>
                  </div>
                  <Bell className="hidden md:block w-8 h-8 text-brand-red opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all shrink-0" />
                </div>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-8">
                  <div className="flex items-center space-x-3 text-gray-500 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-gray flex items-center justify-center">
                      <Clock className="w-4 h-4 text-brand-red" />
                    </div>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-500 font-black text-[9px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.2em]">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-brand-gray flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-brand-red" />
                    </div>
                    <span>{event.location}</span>
                  </div>
                </div>

                <div className="bg-brand-gray/30 p-5 sm:p-6 rounded-2xl text-gray-600 leading-relaxed font-semibold italic border-l-4 sm:border-l-8 border-brand-red/10 text-sm sm:text-base">
                  "{event.description}"
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Parent Volunteer Section */}
      <section className="bg-brand-black rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 text-white mt-12 sm:mt-20 relative overflow-hidden shadow-2xl mx-4">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 relative z-10">
          <div className="shrink-0 bg-brand-red p-6 sm:p-8 rounded-2xl shadow-2xl rotate-3">
            <Coffee className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
          </div>
          <div className="space-y-4 sm:space-y-6 flex-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tighter leading-tight">Stakeholder <br className="sm:hidden" /> Engagement</h2>
            <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed max-w-2xl">
              Our events signify a strong partnership between the school and the guardians. Join our committees this term.
            </p>
            <button className="w-full sm:w-auto bg-brand-red text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm hover:scale-105 transition-all shadow-lg shadow-brand-red/30">
              Apply to Volunteer
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2" />
      </section>
    </div>
  );
}
