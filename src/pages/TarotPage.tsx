// Update the handleCardFlip function to save readings
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