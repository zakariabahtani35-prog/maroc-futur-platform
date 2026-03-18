import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Decision No. 136/2024: A Constitutional Milestone",
    excerpt: "The regional council of Beni Mellal-Khenifra has approved our citizen petition for the creation of a youth incubator in Khouribga, marking a new era of youth empowerment.",
    content: "This decision marks a historic moment for local civil society...",
    date: "July 01, 2024",
    author: "Abdelhadi Hanine",
    image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?q=80&w=800&auto=format&fit=crop",
    category: "Advocacy",
  },
  {
    id: 2,
    title: "Young Leaders Program: 2nd Edition Success",
    excerpt: "Over 50 young leaders completed our intensive training module on social entrepreneurship, cooperative management, and civic engagement.",
    content: "The program focused on practical skills, mentorship...",
    date: "May 06, 2021",
    author: "AMA Team",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
    category: "Training",
  },
  {
    id: 3,
    title: "Launch of Digital Transformation Initiative",
    excerpt: "We are thrilled to announce our new initiative aimed at bridging the digital divide in rural communities through comprehensive workshops.",
    content: "Digital literacy is no longer a luxury...",
    date: "Oct 12, 2023",
    author: "Youssef Amrani",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    category: "Technology",
  },
  {
    id: 4,
    title: "Fostering Environmental Awareness",
    excerpt: "Our recent tree-planting campaign across three provinces has engaged thousands of volunteers to act directly against climate change.",
    content: "Every tree planted is a step towards...",
    date: "Nov 22, 2023",
    author: "Sara Mansouri",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    category: "Community",
  }
];

const categories = ["All", "Advocacy", "Training", "Technology", "Community"];

const News: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredArticles = activeCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="py-24 bg-[#f8f9fa] min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* HERO SECTION */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full rounded-[2.5rem] bg-brand-green overflow-hidden px-8 py-24 md:py-32 mb-16 flex items-center justify-center text-center shadow-lg"
        >
          {/* Decorative Shape: Top Left (Quarter Circle) */}
          <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 bg-[#e4edd9] rounded-br-full opacity-90 transform -translate-x-4 -translate-y-4"></div>
          
          {/* Decorative Shape: Bottom Right (Semi Circle) */}
          <div className="absolute bottom-0 right-12 md:right-32 w-24 h-12 md:w-40 md:h-20 bg-[#fde047] rounded-t-full"></div>

          <div className="relative z-10 flex flex-col items-center">
            <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-sm mb-4">Blog</span>
            <h1 className="text-5xl md:text-7xl font-serif text-white font-bold tracking-tight">Articles & News</h1>
          </div>
        </motion.div>

        {/* HEADER & FILTERS */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl font-serif font-bold text-brand-text-primary"
          >
            Latest articles
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'bg-brand-green text-white shadow-md' 
                    : 'bg-white text-brand-text-secondary hover:bg-white hover:text-brand-green hover:shadow-sm border border-black/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ARTICLES GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <motion.article
                layout
                key={article.id}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700 bg-white border border-black/5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-2">
                  <div className="flex items-center gap-3 text-[13px] font-bold text-brand-text-secondary mb-4">
                    <span className="text-brand-green">{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-text-secondary/30"></span>
                    <span>{article.date}</span>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-brand-text-primary mb-4 leading-tight group-hover:text-brand-green transition-colors duration-300">
                    {article.title}
                  </h3>
                  
                  <p className="text-brand-text-secondary leading-relaxed mb-8 flex-grow line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-brand-green font-bold text-[15px] group-hover:text-brand-red transition-colors duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default News;
