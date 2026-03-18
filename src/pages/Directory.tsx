import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Globe, Mail, Phone, Filter, ChevronRight } from 'lucide-react';

interface Association {
  id: number;
  name: string;
  location: string;
  website: string;
  email: string;
  phone: string;
  category: string;
  members: number;
}

const associations: Association[] = [
  {
    id: 1,
    name: "Association Maroc de l'Avenir (AMA)",
    location: "Khouribga, Morocco",
    website: "www.ama-khouribga.org",
    email: "contact@ama-khouribga.org",
    phone: "+212 523-456789",
    category: "Youth Empowerment",
    members: 120,
  },
  {
    id: 2,
    name: "International Youth Federation",
    location: "Geneva, Switzerland",
    website: "www.iyf.org",
    email: "info@iyf.org",
    phone: "+41 22 123 4567",
    category: "Education",
    members: 5000,
  },
  {
    id: 3,
    name: "African Cultural Network",
    location: "Casablanca, Morocco",
    website: "www.acn.africa",
    email: "hello@acn.africa",
    phone: "+212 522-123456",
    category: "Culture",
    members: 850,
  },
  {
    id: 4,
    name: "Global Health Alliance",
    location: "London, UK",
    website: "www.gha.org",
    email: "contact@gha.org",
    phone: "+44 20 1234 5678",
    category: "Health",
    members: 12000,
  },
];

const Directory: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAssociations = associations.filter(assoc =>
    assoc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assoc.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    assoc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-32 bg-brand-bg-secondary min-h-screen pt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Network</p>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-brand-text-primary mb-6">Associations Directory</h1>
          <p className="text-brand-text-secondary text-lg max-w-2xl font-medium">
            Browse our global network of professional associations and connect with international partners.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="relative flex-grow">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-text-secondary w-5 h-5" />
            <input
              type="text"
              placeholder="Search associations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-white rounded-3xl border border-black/5 shadow-sm focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all font-medium"
            />
          </div>
          <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white rounded-3xl border border-black/5 shadow-sm text-brand-text-primary font-bold text-sm uppercase tracking-widest hover:bg-brand-bg-secondary transition-all">
            <Filter className="w-5 h-5 text-brand-red" />
            Filters
          </button>
        </div>

        {/* Directory Table/List */}
        <div className="bg-white rounded-[3rem] shadow-sm border border-black/5 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-brand-bg-secondary border-b border-black/5">
                  <th className="px-10 py-8 text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest">Association</th>
                  <th className="px-10 py-8 text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest">Location</th>
                  <th className="px-10 py-8 text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest">Category</th>
                  <th className="px-10 py-8 text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest">Members</th>
                  <th className="px-10 py-8 text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest">Contact</th>
                  <th className="px-10 py-8 text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/5">
                {filteredAssociations.map((assoc) => (
                  <motion.tr
                    key={assoc.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-brand-bg-secondary transition-colors group"
                  >
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-6">
                        <div className="w-14 h-14 bg-brand-bg-secondary rounded-2xl flex items-center justify-center text-brand-red font-bold text-xl shadow-inner">
                          {assoc.name.charAt(0)}
                        </div>
                        <span className="font-bold text-brand-text-primary group-hover:text-brand-red transition-colors text-lg font-serif">
                          {assoc.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-3 text-brand-text-secondary font-medium">
                        <MapPin className="w-4 h-4 text-brand-red" />
                        {assoc.location}
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <span className="px-4 py-1.5 bg-brand-bg-secondary rounded-full text-[10px] font-bold text-brand-text-secondary uppercase tracking-widest border border-black/5">
                        {assoc.category}
                      </span>
                    </td>
                    <td className="px-10 py-10 font-bold text-brand-text-primary">
                      {assoc.members.toLocaleString()}
                    </td>
                    <td className="px-10 py-10">
                      <div className="flex gap-4">
                        <a href={`mailto:${assoc.email}`} className="p-3 bg-brand-bg-secondary rounded-xl text-brand-text-secondary hover:text-white hover:bg-brand-red transition-all border border-black/5">
                          <Mail className="w-4 h-4" />
                        </a>
                        <a href={`tel:${assoc.phone}`} className="p-3 bg-brand-bg-secondary rounded-xl text-brand-text-secondary hover:text-white hover:bg-brand-red transition-all border border-black/5">
                          <Phone className="w-4 h-4" />
                        </a>
                        <a href={`https://${assoc.website}`} target="_blank" rel="noopener noreferrer" className="p-3 bg-brand-bg-secondary rounded-xl text-brand-text-secondary hover:text-white hover:bg-brand-red transition-all border border-black/5">
                          <Globe className="w-4 h-4" />
                        </a>
                      </div>
                    </td>
                    <td className="px-10 py-10 text-right">
                      <button className="inline-flex items-center gap-2 text-brand-red font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all">
                        View Profile
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredAssociations.length === 0 && (
            <div className="py-32 text-center text-brand-text-secondary font-medium">
              No associations found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Directory;
