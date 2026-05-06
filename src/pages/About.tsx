import React from 'react';
import { motion } from 'motion/react';
import { History, Target, Compass, Heart, GraduationCap, Sun, Star, Zap, Trophy } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-24 pb-20">
      {/* Vision & Mission Header */}
      <section className="text-center max-w-5xl mx-auto space-y-16">
        <header className="space-y-6 relative px-4">
          {/* Cartoon Floating Shapes */}
          <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -top-10 left-0 w-12 h-12 sm:w-16 sm:h-16 bg-brand-red/10 rounded-2xl sm:rounded-3xl rotate-12" />
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative inline-block p-6 sm:p-8 bg-brand-black rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl mb-6 border-4 border-white"
          >
            <GraduationCap className="w-12 h-12 sm:w-16 sm:h-16 text-brand-red" />
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 bg-brand-red text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg animate-bounce">
              <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
            </div>
          </motion.div>
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-brand-black uppercase tracking-tighter leading-none">Foundations of <br className="sm:hidden" /> <span className="text-brand-red">Success</span></h1>
          <p className="text-lg sm:text-xl text-gray-500 font-medium max-w-3xl mx-auto italic leading-relaxed">
            Techno Group: Where we bridge the gap between today's dreams and tomorrow's technology.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 px-4">
          <div className="bg-white p-8 sm:p-12 rounded-[2rem] sm:rounded-3xl shadow-2xl border-b-8 border-brand-red relative overflow-hidden group">
            <Target className="w-12 h-12 sm:w-14 sm:h-14 text-brand-red mb-6 sm:mb-8 mx-auto md:mx-0" />
            <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-black mb-4 sm:mb-6 text-center md:text-left uppercase tracking-tight">Our Mission</h2>
            <p className="text-base sm:text-lg text-gray-500 font-medium leading-relaxed text-center md:text-left">
              To engineer an elite educational experience that synthesizes ZIMSEC rigor with cutting-edge technology, ensuring every learner thrives.
            </p>
          </div>
          
          <div className="bg-brand-black p-8 sm:p-12 rounded-[2rem] sm:rounded-3xl shadow-2xl border-b-8 border-white/20 relative overflow-hidden group text-white">
            <Compass className="w-12 h-12 sm:w-14 sm:h-14 text-brand-red mb-6 sm:mb-8 mx-auto md:mx-0" />
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white mb-4 sm:mb-6 text-center md:text-left uppercase tracking-tight">Our Vision</h2>
            <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed text-center md:text-left">
              To be the leader in primary education in Zimbabwe, producing innovative thinkers and disciplined leaders for a prosperous nation.
            </p>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-white rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 md:p-24 shadow-2xl relative overflow-hidden border border-brand-black/5 mx-4">
        <div className="max-w-4xl mx-auto space-y-12 sm:space-y-16 relative z-10">
          <div className="flex items-center space-x-4 sm:space-x-6">
            <div className="bg-brand-red p-3 sm:p-4 rounded-xl rotate-3">
               <History className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter">Our Legacy</h2>
          </div>

          <div className="space-y-16 sm:space-y-20 border-l-4 sm:border-l-8 border-brand-gray pl-8 sm:pl-12 ml-4">
            {[
              { 
                year: '2024', 
                title: 'Strategic Inception', 
                desc: 'Founded in Harare with a core focus on bridging the gap between traditional learning and future tech demands.',
                icon: Heart,
              },
              { 
                year: '2025', 
                title: 'Techno Revolution', 
                desc: 'Implemented the first primary-level coding and robotics laboratory in the Southview Park region.',
              },
              { 
                year: 'Today', 
                title: 'Excellence Standard', 
                desc: 'Consistently maintaining a 100% pass rate in national ZIMSEC standards and growing our student body.',
              }
            ].map((milestone, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[3.25rem] sm:-left-[4.25rem] top-0 w-10 h-10 sm:w-12 sm:h-12 bg-white border-4 border-brand-red rounded-lg sm:rounded-xl rotate-12 flex items-center justify-center shadow-lg">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-brand-red rounded-sm" />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-brand-red font-black text-2xl sm:text-3xl font-display">{milestone.year}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-brand-black uppercase tracking-tight leading-tight">{milestone.title}</h3>
                  <p className="text-base sm:text-lg text-gray-500 font-medium leading-relaxed max-w-2xl">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Bubbles */}
      <section className="space-y-12 sm:space-y-16 text-center relative px-4">
        <div className="absolute top-0 left-0 w-full h-full bg-brand-red/5 -skew-y-3 -z-10" />
        <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter underline decoration-brand-red/10">The Techno <span className="text-brand-red">Pillars</span></h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
          {[
            { label: 'ZIMSEC Excellence', icon: Star },
            { label: 'Digital Innovation', icon: Zap },
            { label: 'Discipline', icon: Heart },
            { label: 'Sporting', icon: Trophy },
            { label: 'Global Readiness', icon: Compass }
          ].map((pill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
              className="bg-white px-6 py-4 sm:px-8 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-xl border-b-4 sm:border-b-8 border-brand-red shadow-brand-red/10 flex items-center space-x-3 sm:space-x-4 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-black rounded-lg sm:rounded-xl flex items-center justify-center text-white group-hover:bg-brand-red transition-colors">
                <pill.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <span className="font-black text-brand-black uppercase text-[10px] sm:text-xs tracking-widest">{pill.label}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
