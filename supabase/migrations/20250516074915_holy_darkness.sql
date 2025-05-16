/*
  # Add mock blog content

  1. Changes
    - Insert admin user
    - Add mock blog articles across different spiritual categories
    - Each article includes full content, metadata, and proper categorization
*/

-- First, ensure we have an admin user (replace with your user ID)
INSERT INTO admin_users (id, role) VALUES 
  ('68af8164-d043-48d0-8768-b8cc1847a47e', 'admin')
ON CONFLICT (id) DO NOTHING;

-- Add mock blog articles
INSERT INTO blog_posts (title, slug, content, excerpt, author_id, status, category, tags, seo_title, seo_description, published_at) VALUES
-- Astrology Category
('Understanding Your Birth Chart: A Complete Guide', 'understanding-birth-chart-guide', 
'Your birth chart is a snapshot of the sky at the exact moment you were born. It reveals not just your sun sign, but a complex map of planetary positions that influence your personality, relationships, and life path.

The birth chart is divided into twelve houses, each ruling different aspects of life. The First House governs your identity and appearance, while the Seventh House relates to partnerships and relationships. Understanding these houses helps you navigate life''s challenges and opportunities.

Planetary aspects - the angles planets make to each other - add another layer of meaning. Harmonious aspects like trines (120 degrees) bring ease and flow, while challenging aspects like squares (90 degrees) create growth through tension.

The Rising Sign, or Ascendant, is particularly important as it represents how you approach the world and what others first notice about you. It''s determined by the zodiac sign that was rising on the eastern horizon when you were born.

Your Moon sign reveals your emotional nature and inner world, while Mercury''s placement shows how you think and communicate. Venus indicates what you value and how you approach relationships, and Mars represents your drive and how you assert yourself.

Understanding these elements helps you work with your natural strengths and navigate challenges more effectively. Your birth chart is a powerful tool for self-discovery and personal growth.',
'Discover the profound insights hidden in your astrological birth chart and learn how planetary positions influence your life path.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Astrology', 
ARRAY['Birth Chart', 'Planets', 'Houses'],
'Understanding Your Birth Chart: A Comprehensive Guide to Astrology',
'Learn how to interpret your astrological birth chart and understand the influence of planetary positions on your life and personality.',
NOW()),

('The Influence of Retrograde Planets', 'influence-retrograde-planets',
'Retrograde periods often get a bad rap, but they''re actually powerful times for reflection and inner growth. When a planet appears to move backward from our earthly perspective, its energies turn inward, creating opportunities for review and revision.

Mercury retrograde, occurring 3-4 times yearly, is perhaps the most famous. During these periods, communication, technology, and travel may face challenges. However, it''s an excellent time for reviewing plans, reconnecting with old friends, and finishing unfinished projects.

Venus retrograde affects our relationships and values. It''s a time to reassess what and who we value, potentially reconnecting with past loves or discovering new appreciation for old possessions. This retrograde invites us to examine our relationship patterns and self-worth.

Mars retrograde occurs approximately every two years, turning our energy and drive inward. It''s an opportunity to reassess our goals and how we assert ourselves. While external progress might slow, internal motivation and strategy can strengthen.

Jupiter and Saturn retrogrades influence our growth and structure. These slower-moving planets'' retrograde periods help us review our beliefs, ethics, and life structures, ensuring our foundation is solid before moving forward.

Understanding retrograde energies helps us work with these cycles rather than against them. Each retrograde serves a purpose in our personal evolution.',
'Explore how retrograde planets influence our lives and learn to harness these powerful periods for personal growth.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Astrology',
ARRAY['Retrograde', 'Planets', 'Mercury Retrograde'],
'The Influence of Retrograde Planets: Understanding Cosmic Cycles',
'Discover how retrograde planets affect our lives and learn to use these periods for personal growth and reflection.',
NOW()),

-- Tarot Category
('The Major Arcana: A Journey of Self-Discovery', 'major-arcana-journey',
'The Major Arcana cards in Tarot represent life''s spiritual and karmic lessons. These 22 cards, often called trump cards, form the foundation of the Tarot deck and represent the journey of the Fool through various stages of life.

The journey begins with the Fool (0), representing pure potential and new beginnings. As we progress through the cards, we encounter various archetypal energies and life lessons. The Magician (1) teaches us about manifestation and personal power, while the High Priestess (2) represents intuition and mystery.

The Empress (3) and Emperor (4) represent the divine feminine and masculine principles, teaching us about creation, nurturing, and structure. The Hierophant (5) guides us through traditional wisdom and spiritual education.

Moving through the deck, we encounter cards like the Lovers (6), representing choices and relationships, and the Chariot (7), symbolizing determination and willpower. The Strength card (8) teaches us about inner courage and gentle power.

The later cards deal with deeper spiritual lessons. The Tower (16) represents sudden change and revelation, while the Star (17) brings hope and inspiration. The journey concludes with the World (21), representing completion and integration.

Understanding these cards helps us recognize these archetypal energies in our own lives and use them for personal growth and transformation.',
'Explore the profound symbolism of the Major Arcana cards and their role in personal transformation.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Tarot',
ARRAY['Major Arcana', 'Symbolism', 'Card Meanings'],
'The Major Arcana: Understanding the Fool''s Journey',
'Discover the spiritual significance of the Major Arcana cards and how they represent our journey through life.',
NOW()),

('Reading Tarot Spreads: Beyond the Basics', 'tarot-spreads-advanced',
'Tarot spreads are patterns in which cards are laid out to answer specific questions or provide insight into different aspects of a situation. While the three-card spread is a common starting point, advanced spreads offer deeper insights and more nuanced readings.

The Celtic Cross, one of the most comprehensive spreads, uses ten cards to explore multiple aspects of a situation. Each position has a specific meaning: current situation, challenges, past influences, future possibilities, conscious thoughts, unconscious influences, advice, external influences, hopes/fears, and final outcome.

Relationship spreads can help understand dynamics between people. A mirror spread, where cards are laid out for each person with a central card representing the relationship itself, can reveal individual perspectives and shared energies.

Timing spreads can help understand when events might unfold. Monthly spreads with a card for each week can provide guidance for short-term planning, while yearly spreads with a card for each month offer longer-term perspective.

Shadow work spreads help explore our unconscious patterns and areas for growth. These typically include positions for recognizing our shadows, understanding their origins, and finding ways to integrate these aspects of ourselves.

The key to successful readings lies not just in knowing card meanings, but in understanding how positions modify and relate to each other. The interaction between cards often reveals insights that individual cards alone might not show.',
'Learn advanced tarot spread techniques and how to interpret complex card combinations for deeper insights.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Tarot',
ARRAY['Spreads', 'Reading Techniques', 'Interpretation'],
'Advanced Tarot Spreads: Mastering Complex Readings',
'Master advanced tarot spread techniques and learn to interpret complex card combinations for more insightful readings.',
NOW()),

-- Numerology Category
('Understanding Your Life Path Number', 'life-path-number-guide',
'Your Life Path Number is one of the most important numbers in numerology, calculated from your birth date. It reveals your life''s purpose and the path you''re meant to follow for greatest fulfillment.

To calculate your Life Path Number, reduce your birth date to a single digit. For example, if you were born on June 15, 1990: June (6) + 15 (1+5=6) + 1990 (1+9+9+0=19, 1+9=10, 1+0=1) = 13, 1+3 = 4.

Each Life Path Number carries specific meanings. Number 1s are natural leaders and innovators. Number 2s excel in partnerships and diplomacy. Number 3s are creative communicators. Number 4s are builders and organizers.

Number 5s seek freedom and adventure. Number 6s are nurturers and caretakers. Number 7s are spiritual seekers and researchers. Number 8s are focused on power and abundance. Number 9s are humanitarian and compassionate.

Master Numbers (11, 22, 33) carry special significance. These numbers represent higher spiritual potential and greater challenges. They shouldn''t be reduced to single digits as they carry unique vibrations.

Understanding your Life Path Number helps you align with your natural talents and life purpose, making decisions that support your spiritual growth and personal development.',
'Learn how to calculate and interpret your Life Path Number to understand your life''s purpose and spiritual journey.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Numerology',
ARRAY['Life Path Number', 'Calculations', 'Spiritual Growth'],
'Life Path Numbers: Discovering Your Numerological Purpose',
'Calculate and understand your Life Path Number to reveal your life''s purpose and spiritual journey.',
NOW()),

('The Power of Name Numerology', 'name-numerology-guide',
'Your name is more than just a label - in numerology, it carries a specific vibration that influences your life. The Expression Number, calculated from your full name, reveals your natural talents and abilities.

Each letter corresponds to a number: A=1, B=2, C=3, D=4, E=5, F=6, G=7, H=8, I=9, J=1, and so on. Add these numbers together and reduce to a single digit to find your Expression Number.

The Soul Urge Number, calculated from the vowels in your name, reveals your inner desires and motivations. The Personality Number, calculated from consonants, shows how others perceive you.

Your name''s first letter is particularly significant, indicating initial personality traits and approach to life. The total number of letters can also provide insights into your character and life experiences.

Name changes, whether through marriage or choice, can alter these vibrations. This is why some people feel different after changing their name - they''re literally changing their energetic signature.

Understanding these numbers helps you recognize your inherent strengths and challenges. It can guide career choices, relationship dynamics, and personal growth opportunities.',
'Discover how the numbers in your name influence your personality, talents, and life experiences.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Numerology',
ARRAY['Name Numerology', 'Expression Number', 'Soul Urge'],
'Name Numerology: Understanding Your Numerical Signature',
'Learn how the numbers in your name shape your personality and influence your life path.',
NOW()),

-- Spiritual Growth Category
('Developing Your Intuitive Abilities', 'developing-intuition-guide',
'Intuition is our inner guidance system, a natural ability we all possess that can be developed and strengthened. Like a muscle, the more we use it, the stronger it becomes.

The first step in developing intuition is learning to quiet the mind through meditation. Start with short sessions focusing on your breath. As thoughts arise, acknowledge them without judgment and return to your breath.

Pay attention to your body''s signals. Our bodies often pick up intuitive information before our conscious minds. Notice physical sensations like gut feelings, goosebumps, or sudden energy shifts.

Keep an intuition journal to track your hunches and their outcomes. This helps you recognize patterns and build confidence in your intuitive abilities. Note dreams, synchronicities, and random thoughts that later prove significant.

Practice reading energy. Start with simple exercises like sensing the energy of objects or rooms. Graduate to reading people''s energy fields, always respecting boundaries and privacy.

Trust is crucial. Often we receive intuitive information but doubt or dismiss it. Learn to trust your first impressions and act on your intuitive guidance, even in small ways.',
'Learn practical techniques to develop and trust your natural intuitive abilities.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Spiritual Growth',
ARRAY['Intuition', 'Psychic Development', 'Meditation'],
'Developing Intuition: A Practical Guide to Spiritual Growth',
'Master practical techniques for developing and trusting your natural intuitive abilities.',
NOW()),

('The Art of Energy Cleansing', 'energy-cleansing-guide',
'Energy cleansing is essential for maintaining spiritual and emotional well-being. Our environments and bodies accumulate energetic debris from daily interactions and experiences.

Smudging with sacred herbs is a traditional cleansing method. Sage removes negative energy, while palo santo brings in positive energy. Cedar is grounding and protective. Always set clear intentions when smudging.

Sound cleansing uses vibration to break up stagnant energy. Singing bowls, bells, or even clapping can be effective. The sound waves travel through space, disrupting and clearing negative energy patterns.

Salt is a powerful cleanser. Bath in sea salt or Himalayan salt to cleanse your energy field. Place salt bowls in room corners to absorb negative energy, or sprinkle it around your home''s perimeter for protection.

Visualization is a powerful tool. Imagine white or golden light flowing through your space or body, dissolving any dark or heavy energy. Combined with intention, visualization can be as effective as physical cleansing methods.

Regular maintenance is key. Like physical cleaning, energy cleansing should be done regularly, especially after challenging interactions or in times of stress.',
'Master various techniques for cleansing and maintaining positive energy in your space and aura.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Spiritual Growth',
ARRAY['Energy Cleansing', 'Smudging', 'Protection'],
'Energy Cleansing: Essential Techniques for Spiritual Maintenance',
'Learn effective methods for cleansing and maintaining positive energy in your space and aura.',
NOW()),

-- Love & Relationships Category
('Soul Connections: Understanding Different Types of Love', 'soul-connections-guide',
'Not all soul connections are the same - understanding the different types helps us navigate these profound relationships. Each type serves a specific purpose in our spiritual growth.

Soulmates aren''t just romantic partners. They can be friends, family members, or mentors who share a deep soul contract with us. These relationships often feel familiar and comfortable from the start.

Twin flames represent our soul''s other half, mirroring our deepest issues and triggering intense growth. These relationships are often challenging but transformative, pushing us to face our shadows.

Karmic relationships are temporary but significant connections that help us resolve past life issues. They''re often intense and challenging, teaching important lessons before naturally concluding.

Soul teachers appear to guide us through specific life lessons. These connections might be brief but leave lasting impacts on our spiritual journey.

Soul groups are clusters of souls we repeatedly incarnate with, playing different roles in each lifetime. Recognizing these connections helps us understand our soul''s journey and purpose.',
'Explore different types of soul connections and their roles in our spiritual growth and personal development.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Love & Relationships',
ARRAY['Soul Connections', 'Twin Flames', 'Relationships'],
'Soul Connections: Types of Spiritual Relationships',
'Understand different types of soul connections and their significance in your spiritual journey.',
NOW()),

('Healing Relationship Patterns', 'healing-relationship-patterns',
'Our relationship patterns often stem from early experiences and past lives. Recognizing and healing these patterns is crucial for creating healthy relationships.

Attachment styles formed in childhood influence our adult relationships. Understanding whether we''re anxious, avoidant, or secure helps us recognize our triggers and needs.

Shadow work in relationships involves facing our projections and triggers. What bothers us most in others often reflects disowned parts of ourselves.

Past life relationships can influence current patterns. Sometimes we recreate similar dynamics lifetime after lifetime until we learn the lesson and break the cycle.

Energy cords form between people in relationships. While some connections are healthy, others can drain our energy. Learning to manage these connections helps maintain healthy boundaries.

Forgiveness is crucial for healing relationship patterns. This doesn''t mean condoning harmful behavior, but releasing the emotional charge that keeps us stuck in old patterns.',
'Learn to identify and heal recurring relationship patterns for healthier connections.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Love & Relationships',
ARRAY['Healing', 'Patterns', 'Shadow Work'],
'Healing Relationship Patterns: Breaking Free from Old Cycles',
'Discover how to identify and heal recurring relationship patterns for more fulfilling connections.',
NOW()),

-- Meditation Category
('Beginning a Daily Meditation Practice', 'daily-meditation-guide',
'Starting a meditation practice doesn''t require hours of sitting - even a few minutes daily can create significant benefits. The key is consistency rather than duration.

Choose a specific time and place for your practice. Morning often works best, before the day''s activities begin. Create a dedicated space that feels peaceful and inviting.

Start with the breath. Simply observing your natural breathing pattern helps calm the mind and anchor awareness in the present moment. Count breaths or use a simple mantra if it helps maintain focus.

Physical comfort is important. Find a position that''s both comfortable and alert. You can sit on a cushion, chair, or even lie down if needed, though lying down might induce sleep.

Don''t fight thoughts - they''re a natural part of meditation. Instead, practice observing them without attachment, like clouds passing through the sky. Gently return focus to your breath when you notice mind-wandering.

Gradually increase duration as your practice develops. Start with 5-10 minutes and extend the time as it feels natural.',
'Learn how to establish and maintain a consistent daily meditation practice.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Meditation',
ARRAY['Meditation', 'Mindfulness', 'Daily Practice'],
'Daily Meditation: A Beginner''s Guide to Consistent Practice',
'Start and maintain a daily meditation practice with these practical guidelines and techniques.',
NOW()),

('Advanced Meditation Techniques', 'advanced-meditation-guide',
'Beyond basic mindfulness lie numerous advanced meditation techniques that can deepen your practice and spiritual awareness.

Vipassana meditation involves systematic observation of bodily sensations to understand their true nature. This technique develops deep insight into the impermanence of all phenomena.

Trataka, or fixed-gazing meditation, involves focusing on a single point, often a candle flame. This practice develops concentration and is said to enhance psychic abilities.

Kundalini meditation works with the body''s energy centers or chakras. Through specific breathing techniques and visualizations, this practice awakens dormant spiritual energy.

Sound meditation using mantras or sacred syllables can access deeper states of consciousness. The vibrations of certain sounds are said to align our energy with specific spiritual frequencies.

Empty mind meditation, or Shikantaza in Zen tradition, involves simply sitting with no object of focus. This advanced practice requires significant preparation and often benefits from teacher guidance.',
'Explore advanced meditation techniques for deeper spiritual practice and awareness.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Meditation',
ARRAY['Advanced Meditation', 'Techniques', 'Spiritual Practice'],
'Advanced Meditation: Deepening Your Spiritual Practice',
'Master advanced meditation techniques to enhance your spiritual practice and consciousness.',
NOW()),

-- Crystal Healing Category
('Essential Crystals for Beginners', 'essential-crystals-guide',
'Crystal healing harnesses the Earth''s mineral energies for physical, emotional, and spiritual well-being. Certain crystals are particularly useful for beginners.

Clear Quartz is known as the master healer and can be programmed for any intention. It amplifies energy, clarifies thought, and enhances meditation. This versatile crystal is essential for any collection.

Amethyst provides spiritual protection and enhances intuition. It''s excellent for meditation and can help with sleep issues and stress relief. Place it by your bedside or carry it for calm energy.

Rose Quartz opens the heart chakra and promotes self-love. It''s gentle energy helps heal emotional wounds and attract loving relationships. Keep it near to maintain heart-centered awareness.

Black Tourmaline offers powerful protection against negative energy. It grounds excess energy and helps maintain energetic boundaries. Place it by electronic devices or wear it for protection.

Citrine attracts abundance and success. Known as the merchant''s stone, it promotes optimism and motivation. Keep it in your workspace or wallet to attract prosperity.',
'Discover the essential crystals for beginning your crystal healing journey.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Crystal Healing',
ARRAY['Crystals', 'Healing', 'Beginners'],
'Essential Crystals: A Beginner''s Guide to Crystal Healing',
'Learn about the most important crystals for starting your crystal healing practice.',
NOW()),

('Advanced Crystal Grids and Layouts', 'crystal-grids-guide',
'Crystal grids combine sacred geometry with crystal energy to create powerful healing tools. The arrangement amplifies and focuses the crystals'' energy for specific purposes.

The basis of any grid is sacred geometry. Common patterns include the Flower of Life, Seed of Life, and Metatron''s Cube. Each pattern carries specific energetic properties.

Choose crystals based on your intention. The center stone anchors the grid''s purpose, while surrounding stones support and amplify this energy. Clear Quartz points can be used to direct energy flow.

Activation involves connecting the crystals energetically, usually with a Clear Quartz wand or your finger, tracing the geometric pattern. Set clear intentions during activation.

Location matters - grids can be created on sacred objects, in specific rooms, or on the body for healing work. Some practitioners create permanent grids in their spaces for ongoing energy work.

Regular maintenance keeps the grid energized. Cleanse the crystals periodically and reactivate the grid during astrologically favorable times.',
'Master the art of creating and activating crystal grids for powerful energy work.',
'68af8164-d043-48d0-8768-b8cc1847a47e', 'published', 'Crystal Healing',
ARRAY['Crystal Grids', 'Sacred Geometry', 'Energy Work'],
'Crystal Grids: Advanced Techniques for Energy Work',
'Learn to create and activate powerful crystal grids using sacred geometry and intention.',
NOW());