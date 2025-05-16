import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { History, Search, Filter, ChevronDown, FileText, Sparkles, CloudMoon, HeartHandshake, Star } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';
import { useUser } from '../contexts/UserContext';
import { getUserReadings } from '../lib/readings';

const ReadingHistoryPage: React.FC = () => {
  const { user } = useUser();
  const [readings, setReadings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  
  useEffect(() => {
    if (user?.id) {
      fetchReadings();
    }
  }, [user]);
  
  const fetchReadings = async () => {
    try {
      setLoading(true);
      const data = await getUserReadings(user?.id as string);
      setReadings(data);
    } catch (error) {
      console.error('Error fetching readings:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const getReadingIcon = (type: string) => {
    switch (type) {
      case 'tarot':
        return <Sparkles className="h-4 w-4 text-accent" />;
      case 'horoscope':
        return <CloudMoon className="h-4 w-4 text-accent" />;
      case 'compatibility':
        return <HeartHandshake className="h-4 w-4 text-accent" />;
      default:
        return null;
    }
  };
  
  const filteredReadings = readings.filter(reading => {
    const matchesType = typeFilter === 'all' || reading.type === typeFilter;
    const matchesSearch = reading.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         JSON.stringify(reading.content).toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <MainLayout showSidebar>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-cinzel font-bold flex items-center">
              <History className="mr-3 h-6 w-6 text-accent" />
              Reading History
            </h1>
            <p className="text-white/70 mt-1">
              Review your past readings and insights
            </p>
          </div>
          
          {user?.isPremium && (
            <button className="mt-4 md:mt-0 btn btn-outline flex items-center">
              <FileText className="mr-2 h-4 w-4" />
              Export History
            </button>
          )}
        </div>
        
        {/* Filters */}
        <div className="card mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search readings..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input pl-10 w-full"
                />
              </div>
            </div>
            
            <div className="relative">
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="input pr-10 appearance-none"
              >
                <option value="all">All Types</option>
                <option value="tarot">Tarot</option>
                <option value="horoscope">Horoscope</option>
                <option value="compatibility">Compatibility</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 h-4 w-4" />
            </div>
          </div>
        </div>
        
        {/* Readings List */}
        <div className="space-y-4">
          {filteredReadings.map((reading) => (
            <div key={reading.id} className="card hover:border-accent/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-lg">
                  {getReadingIcon(reading.type)}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold capitalize">{reading.type} Reading</h3>
                    <span className="text-white/60 text-sm">
                      {format(new Date(reading.created_at), 'MMM d, yyyy h:mm a')}
                    </span>
                  </div>
                  
                  {reading.type === 'tarot' && (
                    <div>
                      <p className="text-white/80 text-sm mb-2">
                        {reading.content.spread} Card Spread
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {reading.content.cards.map((card: any, index: number) => (
                          <span key={index} className="bg-surface/70 text-white/80 text-xs px-2 py-1 rounded-full">
                            {card.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {reading.type === 'horoscope' && (
                    <div>
                      <p className="text-white/80 text-sm mb-2">
                        {reading.content.sign} - {reading.content.type} Horoscope
                      </p>
                      <p className="text-white/60 text-sm">
                        For {reading.content.date}
                      </p>
                    </div>
                  )}
                  
                  {reading.type === 'compatibility' && (
                    <div>
                      <p className="text-white/80 text-sm mb-2">
                        {reading.content.sign1} & {reading.content.sign2}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full">
                          {reading.content.score}% Compatible
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                {user?.isPremium && (
                  <button className="btn btn-outline btn-sm">
                    View Details
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {!user?.isPremium && (
          <div className="mt-8 card bg-gradient-to-r from-primary to-secondary p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <Star className="mr-2 h-5 w-5 text-accent" />
                  Unlock Full Reading History
                </h3>
                <p className="text-white/80">
                  Upgrade to Premium to access your complete reading history,
                  detailed insights, and PDF exports.
                </p>
              </div>
              <a href="/upgrade" className="btn btn-accent">
                Upgrade Now
              </a>
            </div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default ReadingHistoryPage;