import React, { useState } from 'react';

const initialPhotos = [
  {
    id: 1,
    title: "Your Gorgeous Smile",
    caption: "In your smile, I see something more beautiful than the stars.",
    romanticNote: "✨ Every time you smile, my entire world lights up.",
    img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "My Favorite Memory",
    caption: "Every single second spent with you feels like a dream come true.",
    romanticNote: "💖 Holding your hand is where I belong forever.",
    img: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Forever & Always",
    caption: "I fell in love with you yesterday, love you still, always have, always will.",
    romanticNote: "🌹 You are my today and all of my tomorrows.",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800"
  }
];

export default function StepTwoGallery({ onNext }) {
  const [cards, setCards] = useState(initialPhotos);

  const handleImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const newImgUrl = URL.createObjectURL(file);
      const updatedCards = [...cards];
      updatedCards[index].img = newImgUrl;
      setCards(updatedCards);
    }
  };

  return (
    <div className="gallery-container" style={{ maxWidth: '1100px' }}>
      <div className="sub-heading">Memory Lane</div>
      <h2 className="main-heading" style={{ fontSize: '2.5rem' }}>Our Precious Moments 📸</h2>
      <p className="wish-desc" style={{ marginBottom: '20px', fontSize: '1.1rem' }}>
        Click on any photo frame below to add your favorite picture!
      </p>

      {/* Grid with Larger Cards */}
      <div 
        className="gallery-grid" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '35px', 
          margin: '35px 0' 
        }}
      >
        {cards.map((card, index) => (
          <div 
            key={card.id} 
            className="polaroid-card" 
            style={{ 
              padding: '20px', 
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              background: '#ffffff'
            }}
          >
            {/* Bigger Photo Container */}
            <div 
              className="photo-wrapper" 
              style={{ height: '320px', borderRadius: '14px', position: 'relative' }}
            >
              <img 
                src={card.img} 
                alt={card.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '14px' }} 
              />
              <label className="photo-upload-overlay">
                📷 Click to Upload Photo
                <input 
                  type="file" 
                  accept="image/*" 
                  hidden 
                  onChange={(e) => handleImageUpload(index, e)} 
                />
              </label>
            </div>

            {/* Romantic Details under each photo */}
            <h3 className="polaroid-title" style={{ fontSize: '1.3rem', marginTop: '16px' }}>
              {card.title}
            </h3>
            <p className="polaroid-caption" style={{ fontSize: '0.95rem', color: '#475569', marginBottom: '8px' }}>
              "{card.caption}"
            </p>
            <div 
              style={{ 
                fontSize: '0.85rem', 
                color: '#e11d48', 
                fontWeight: '600', 
                borderTop: '1px dashed #f1f5f9', 
                paddingTop: '8px',
                marginTop: '8px'
              }}
            >
              {card.romanticNote}
            </div>
          </div>
        ))}
      </div>

      {/* Romantic Quote section above the Next Button */}
      <p 
        style={{ 
          fontSize: '1.15rem', 
          fontStyle: 'italic', 
          color: '#fbcfe8', 
          marginBottom: '30px', 
          textShadow: '0 0 10px rgba(244,63,94,0.3)' 
        }}
      >
        "No matter where life takes us, holding your hand will always be my favorite journey." ❤️
      </p>

      {/* Next Step Button */}
      <button 
        className="btn-primary" 
        onClick={onNext} 
        style={{ margin: '0 auto', cursor: 'pointer', zIndex: 10, position: 'relative' }}
      >
        <span>Tap for Your Birthday Letter</span>
        <span>💌</span>
      </button>
    </div>
  );
}