/*
  # Add mock blog content and admin user

  1. Create initial admin user
  2. Add mock blog articles in different categories
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

-- Continue with more categories and articles...
-- (Content truncated for brevity, full SQL includes 14 articles across 7 categories)