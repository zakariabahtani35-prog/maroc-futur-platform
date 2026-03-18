import React from 'react';
import { 
  Play, 
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Gallery = () => {
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');

  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : url;
  };

  const categories = [
    { name: 'All', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
    { name: 'Youth Workshops 2024', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80' },
    { name: 'Community Events', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
    { name: 'Civic Training', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80' },
    { name: 'Cultural Festivals', img: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?auto=format&fit=crop&q=80' },
    { name: 'Environmental Action', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80' },
  ];

  const highlights = [
    { title: 'Youth Leadership Summit', location: 'Khouribga', category: 'Youth Workshops 2024', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80' },
    { title: 'Digital Literacy Workshop', location: 'Regional Center', category: 'Civic Training', img: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80' },
    { title: 'Environmental Awareness', location: 'Public Park', category: 'Environmental Action', img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80' },
    { title: 'Civic Engagement Forum', location: 'City Hall', category: 'Civic Training', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80' },
  ];

  const videos = [
    { id: 'wMEjXZfe37Q', title: 'AMA 10th Anniversary', category: 'Community Events', thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80' },
    { id: 'dQw4w9WgXcQ', title: 'Young Leaders Program', category: 'Youth Workshops 2024', thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80' },
    { id: 'wMEjXZfe37Q', title: 'Community Impact 2024', category: 'Community Events', thumbnail: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80' },
    { id: 'dQw4w9WgXcQ', title: 'Civic Education Series', category: 'Civic Training', thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80' },
  ];

  const filteredHighlights = selectedCategory === 'All' 
    ? highlights 
    : highlights.filter(item => item.category === selectedCategory);

  const filteredVideos = selectedCategory === 'All' 
    ? videos 
    : videos.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-brand-bg-primary pt-32 pb-20 font-sans text-brand-text-primary">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-serif tracking-tight mb-8"
        >
          Our Journey in <span className="text-brand-red">Pictures</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Explore our visual archive of community projects, youth workshops, and cultural initiatives that define our mission.
        </motion.p>
      </section>

      {/* Category Bar */}
      <section className="py-12 border-y border-brand-text-primary/5 mb-20 bg-brand-bg-secondary/50 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-3 group cursor-pointer px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat.name 
                  ? 'bg-brand-red text-white shadow-xl scale-105' 
                  : 'bg-brand-bg-secondary hover:bg-brand-bg-secondary/80 text-brand-text-secondary hover:text-brand-text-primary'
              }`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-transparent group-hover:border-white/20 transition-colors">
                <img src={cat.img} alt={cat.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-bold font-mono tracking-wider uppercase">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-serif mb-12"
        >
          Recent Highlights
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredHighlights.map((item) => (
              <motion.div 
                key={item.title} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-6 shadow-2xl border border-black/5">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white text-xs font-bold uppercase tracking-widest">{item.category}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-1 text-brand-text-primary group-hover:text-brand-red transition-colors">{item.title}</h3>
                <p className="text-brand-green font-bold text-sm">{item.location}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Video Gallery */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-serif mb-12"
        >
          Video Gallery
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div 
                key={video.id} 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative aspect-video rounded-3xl overflow-hidden mb-4 shadow-2xl group/card border border-black/5">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 group-hover:scale-110 transition-transform shadow-3xl">
                      <Play size={24} fill="currentColor" />
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-xl text-brand-text-primary group-hover:text-brand-red transition-colors">{video.title}</h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
          >
            <motion.div 
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-3xl border border-white/10"
            >
              <button 
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-20 backdrop-blur-md"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={20} />
              </button>
              <iframe 
                src={`https://www.youtube.com/embed/${getYoutubeId(selectedVideo)}?autoplay=1`}
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Video Player"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;

