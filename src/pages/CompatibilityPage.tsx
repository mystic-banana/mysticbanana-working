// Add saveReading import
import { saveReading } from '../lib/readings';

// Update the handleSubmit function to save readings
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setHasSubmitted(true);
  
  // Save reading to Supabase
  try {
    await saveReading({
      user_id: user?.id as string,
      type: 'compatibility',
      content: {
        sign1,
        sign2,
        score: compatibilityScore,
        areas: areaScores,
        birthDateTime1,
        birthDateTime2,
        birthPlace1,
        birthPlace2
      }
    });
  } catch (error) {
    console.error('Error saving reading:', error);
  }
};