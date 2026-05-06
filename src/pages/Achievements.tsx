import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Star, Medal, Award, Heart } from 'lucide-react';
import { Achievement } from '../types';

const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Inter-School Debating Champions',
    studentName: 'Grade 6 Team',
    grade: 'Grade 6',
    description: 'Our debating team took first place in the Bulawayo ZIMSEC Primary Schools Tournament!',
    date: 'March 2026',
  },
  {
    id: '2',
    title: 'Top Mathematics Performer',
    studentName: 'Tariro Sibanda',
    grade: 'Grade 4',
    description: 'Tariro achieved 100% in the National Mental Math Challenge. Welldone!',
    date: 'February 2026',
  },
  {
    id: '3',
    title: 'Football League Winners',
    studentName: 'The Junior Warriors',
    grade: 'Grade 5 & 6',
    description: 'Our boys football team remained undefeated throughout the spring season.',
    date: 'April 2026',
  },
  {
    id: '4',
    title: 'Creative Arts Excellence',
    studentName: 'Kundai Moyo',
    grade: 'Grade 3',
    description: 'Kundai\'s painting "My Zimbabwe" was selected for the National Children\'s Art Gallery.',
    date: 'January 2026',
  },
];

export default function Achievements() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      <header className="text-center space-y-6 relative py-8 sm:py-12 px-4">
        <div className="absolute top-0 left-1/3 w-32 h-32 bg-brand-red/5 rounded-full blur-3xl" />
        
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [3, -3, 3] }}
          transition={{ repeat: Infinity, duration: 5 }}
          className="relative inline-block p-6 sm:p-8 bg-brand-red rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_50px_rgba(220,38,38,0.3)] mb-4 border-4 border-white"
        >
          <Trophy className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          <motion.div 
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-10 h-10 sm:w-12 sm:h-12 bg-brand-black rounded-full flex items-center justify-center text-white border-2 border-white"
          >
            <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
          </motion.div>
        </motion.div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-brand-black uppercase tracking-tighter leading-none px-4">Student <br className="sm:hidden" /> <span className="text-brand-red">Laurels</span></h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-medium italic px-4">
          High-fives and big cheers for our amazing Techno scholars! 
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-4">
        {achievements.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`flex flex-col items-center p-8 sm:p-12 bg-white rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden border-b-8 border-brand-red group hover:-translate-y-2 transition-all text-center`}
          >
            <div className={`shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center bg-brand-black text-white shadow-xl rotate-3 mb-6 sm:mb-8 group-hover:rotate-12 transition-transform duration-500 relative`}>
                <Medal className="w-10 h-10 sm:w-14 sm:h-14" />
                <Star className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-7 h-7 sm:w-10 sm:h-10 text-brand-red fill-current animate-pulse bg-white rounded-full p-1 border-2 border-brand-red" />
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex justify-center gap-2 sm:gap-3 items-center">
                <span className="bg-brand-red/10 text-brand-red px-3 py-1 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                  {item.date}
                </span>
                <span className="bg-brand-black text-white px-3 py-1 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest whitespace-nowrap">{item.grade}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-black uppercase tracking-tighter leading-tight sm:leading-none">{item.title}</h3>
              <p className="text-brand-red font-black text-lg sm:text-xl italic tracking-tight">{item.studentName}</p>
              <div className="w-12 h-1 sm:w-16 sm:h-1.5 bg-brand-red/10 mx-auto rounded-full" />
              <p className="text-sm sm:text-lg text-gray-500 leading-relaxed font-semibold italic px-2 sm:px-4">"{item.description}"</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-brand-black rounded-[2rem] sm:rounded-[2.5rem] p-10 sm:p-16 text-white text-center relative overflow-hidden shadow-2xl mx-4"
      >
        <div className="relative z-10 space-y-6 sm:space-y-8">
          <div className="bg-brand-red w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-brand-red/50">
             <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tighter leading-tight">Wisdom Corner</h2>
          <p className="text-lg sm:text-2xl opacity-70 max-w-2xl mx-auto italic font-medium leading-relaxed">
            "The Techno mindset is not just about results, but about the character we build in the process."
          </p>
          <div className="text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase text-brand-red">Techno Group Charter</div>
        </div>
      </motion.div>
    </div>
  );
}
