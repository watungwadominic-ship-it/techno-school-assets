import React from 'react';
import { motion } from 'motion/react';
import { Camera, Image as ImageIcon, Video, Heart, Star, Zap } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Science Fair 2025', category: 'Academic', image: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?q=80&w=800' },
  { id: 2, title: 'Interschool Football', category: 'Sports', image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=800' },
  { id: 3, title: 'Coding Workshop', category: 'Technology', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800' },
  { id: 4, title: 'Culture Day Celebration', category: 'Culture', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800' },
  { id: 5, title: 'Graduation Ceremony', category: 'Milestone', image: 'https://images.unsplash.com/photo-1523050853064-80b8450a42e5?q=80&w=800' },
  { id: 6, title: 'Art & Design Studio', category: 'Creative', image: 'https://images.unsplash.com/photo-1460661430221-436e339a7d6d?q=80&w=800' },
];

export default function Gallery() {
  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      <header className="text-center space-y-6 relative py-8 sm:py-12 px-4">
        <motion.div
           animate={{ rotate: [0, 10, -10, 0] }}
           transition={{ repeat: Infinity, duration: 6 }}
           className="inline-block p-6 sm:p-8 bg-brand-black rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl relative border-4 border-white"
        >
          <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-brand-red" />
          <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-brand-red text-white p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg border-2 border-white">
            <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </motion.div>
        
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-black text-brand-black uppercase tracking-tighter leading-none">School <br className="sm:hidden" /> <span className="text-brand-red">Snapshots</span></h1>
        <p className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto font-medium italic px-4">
          Capturing the vibrant moments and digital milestones of the Techno Group family.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
        {galleryItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative h-72 sm:h-80 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl bg-brand-black"
          >
            <img 
              src={item.image} 
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="flex items-center space-x-2 text-brand-red font-black uppercase text-[10px] tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <Zap className="w-3 h-3 fill-current" />
                 <span>{item.category}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-brand-red transition-colors">
                {item.title}
              </h3>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-brand-red text-white p-2 sm:p-3 rounded-lg sm:rounded-2xl shadow-xl transform rotate-12">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-brand-red text-white rounded-[2rem] sm:rounded-[3rem] p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden mx-4">
        <div className="relative z-10 space-y-6 sm:space-y-8">
          <HistoryIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto animate-spin-[10s]" />
          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tighter leading-tight">More Memories <br />Loading...</h2>
          <p className="text-lg sm:text-xl font-medium opacity-80 max-w-xl mx-auto">
            Stay tuned as we continue to capture the excellence and joy of our 2024 inaugural term.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}

const HistoryIcon = ({ className }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>;
