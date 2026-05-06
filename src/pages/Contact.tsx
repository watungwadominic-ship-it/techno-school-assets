import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, Star, Zap, GraduationCap } from 'lucide-react';

export default function Contact() {
  return (
    <div className="space-y-12 sm:space-y-24 pb-20">
      <header className="text-center space-y-6 relative py-8 sm:py-12 px-4">
        <motion.div
           animate={{ y: [0, -10, 0] }}
           transition={{ repeat: Infinity, duration: 4 }}
           className="inline-block p-6 sm:p-8 bg-brand-black rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl relative border-4 border-white"
        >
          <Phone className="w-12 h-12 sm:w-16 sm:h-16 text-brand-red" />
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-brand-red text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg animate-pulse">
            <Zap className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          </div>
        </motion.div>
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-brand-black uppercase tracking-tighter leading-none">Get In <span className="text-brand-red">Touch</span></h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-medium italic px-4">
          Have a question or looking to enroll? Our admissions team is ready to welcome you!
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start max-w-6xl mx-auto px-4 sm:px-6">
        {/* Contact Info */}
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-6 sm:space-y-8 text-center sm:text-left">
            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-black uppercase tracking-tighter">School Campus</h2>
            <div className="space-y-5 sm:space-y-6">
              {[
                { icon: MapPin, text: 'Fidelity Southview Park, Harare, Zimbabwe', title: 'Location' },
                { icon: Phone, text: '+263 77 555 0123 / +263 242 555 0199', title: 'Call Us' },
                { icon: Mail, text: 'admissions@technogroup.ac.zw', title: 'Email' },
                { icon: Clock, text: 'Mon - Fri: 07:30 AM - 04:30 PM', title: 'Office Hours' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col sm:flex-row items-center sm:items-start sm:space-x-6 space-y-3 sm:space-y-0 group">
                  <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-brand-black/5 group-hover:bg-brand-red group-hover:text-white transition-all shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-center sm:text-left">
                    <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-brand-red mb-1">{item.title}</div>
                    <div className="text-base sm:text-lg font-bold text-gray-700 leading-tight">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-brand-black p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4 text-center sm:text-left">
              <div className="bg-brand-red w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-6 mx-auto sm:mx-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">Visit Our Office</h3>
              <p className="text-gray-400 font-medium text-sm sm:text-base">
                Physical tours of our state-of-the-art Southview Park campus are available every Wednesday by appointment.
              </p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          </div>
        </div>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] shadow-2xl shadow-brand-black/5 border-2 border-brand-red/10 space-y-8 sm:space-y-10"
        >
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-black uppercase tracking-tighter">Inquiry Form</h3>
            <p className="text-gray-400 font-bold uppercase text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em]">Direct Line to Admissions</p>
          </div>

          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Full Name</label>
                <input type="text" className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-brand-gray border-none focus:ring-4 focus:ring-brand-red/20 font-bold transition-all text-sm sm:text-base" placeholder="Enter name" />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Phone</label>
                <input type="tel" className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-brand-gray border-none focus:ring-4 focus:ring-brand-red/20 font-bold transition-all text-sm sm:text-base" placeholder="+263..." />
              </div>
            </div>
            
            <div className="space-y-1.5 sm:space-y-2">
              <label className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-gray-400 ml-4">Inquiry Message</label>
              <textarea rows={4} className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl bg-brand-gray border-none focus:ring-4 focus:ring-brand-red/20 font-bold transition-all resize-none text-sm sm:text-base" placeholder="How can we help?"></textarea>
            </div>

            <button className="w-full btn-primary h-14 sm:h-16 !rounded-xl sm:!rounded-2xl group flex items-center justify-center space-x-3 sm:space-x-4">
              <span className="uppercase text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em]">Send Message</span>
              <Send className="w-4 h-4 sm:w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>

          <div className="text-center">
            <div className="flex justify-center space-x-1 sm:space-x-2 mb-2">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-brand-red fill-current" />)}
            </div>
            <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-gray-300">Proudly ZIMSEC Accredited</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
