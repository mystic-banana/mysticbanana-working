import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import { useUser } from '../contexts/UserContext';
import MainLayout from '../components/layout/MainLayout';
import { 
  Sparkles, 
  FileText, 
  Star, 
  Info, 
  XCircle, 
  RotateCcw,
  Search,
  ArrowRight,
  ArrowLeft,
  Heart,
  Briefcase,
  Brain,
  Coins,
  Merge as Energy,
  Clock
} from 'lucide-react';
import TarotCard from '../components/tarot/TarotCard';
import { saveReading } from '../lib/readings';

interface Card {
  name: string;
  position: number;
  reversed: boolean;
}

const TarotPage: React.FC = () => {
  const { user } = useUser();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [isReadingComplete, setIsReadingComplete] = useState(false);
  const [selectedSpread, setSelectedSpread] = useState('');
  const [cards, setCards] = useState<Card[]>([]);

  const getCardLabel = (index: number): string => {
    return `Position ${index + 1}`;
  };

  const handleCardFlip = async (index: number) => {
    if (!flippedCards.includes(index)) {
      const newFlippedCards = [...flippedCards, index];
      setFlippedCards(newFlippedCards);
      
      // Check if reading is complete (all cards flipped)
      if (newFlippedCards.length === cards.length) {
        setIsReadingComplete(true);
        
        // Save reading to Supabase
        try {
          await saveReading({
            user_id: user?.id as string,
            type: 'tarot',
            content: {
              spread: selectedSpread,
              cards: cards.map((card, i) => ({
                ...card,
                position: getCardLabel(i)
              }))
            }
          });
        } catch (error) {
          console.error('Error saving reading:', error);
        }
      }
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-cinzel font-bold mb-8">Tarot Reading</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            {/* Tarot spread selection and cards will be added here */}
            <p className="text-gray-600">Tarot reading implementation coming soon...</p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TarotPage;