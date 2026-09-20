import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function StepZeroCake({ onNext }) {
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlowAndNext = () => {
    setCandlesBlown(true);

    // Confetti blast animation
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 60,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 60,
        origin: { x: 1 }
      });
    }, 250);

    // Confetti blast dikhane ke baad next step par jana
    setTimeout(() => {
      if (onNext) onNext();
    }, 1200);
  };

  return (
    <div 
      className="wish-container" 
      style={{ 
        textAlign: 'center', 
        padding: '30px 20px',
        maxWidth: '650px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="sub-heading" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', opacity: 0.8 }}>
        ✨ Time to Celebrate ✨
      </div>
      
      <h1 className="main-heading" style={{ fontSize: '2.6rem', margin: '15px 0' }}>
        Make a Wish & Cut the Cake! 🎂
      </h1>

      {/* Interactive Animated Cake Area */}
      <div 
        style={{ 
          margin: '35px auto', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          cursor: 'pointer'
        }}
        onClick={handleBlowAndNext}
      >
        {/* Candle Flame & Glow Effect */}
        <div style={{ display: 'flex', gap: '15px', marginBottom: '-10px' }}>
          {[1, 2, 3].map((_, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {!candlesBlown ? (
                <span 
                  style={{ 
                    fontSize: '1.8rem', 
                    animation: 'pulse 0.8s infinite alternate',
                    filter: 'drop-shadow(0 0 8px #ffb703)'
                  }}
                >
                  🔥
                </span>
              ) : (
                <span style={{ fontSize: '1.2rem', opacity: 0.6 }}>💨</span>
              )}
              <div 
                style={{ 
                  width: '8px', 
                  height: '35px', 
                  background: 'linear-gradient(to bottom, #f43f5e, #fda4af)', 
                  borderRadius: '4px' 
                }} 
              />
            </div>
          ))}
        </div>

        {/* Multi-tier Professional Cake Card */}
        <div 
          style={{ 
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '30px 45px',
            borderRadius: '24px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            marginTop: '5px'
          }}
        >
          <div style={{ fontSize: '5rem', filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))' }}>
            🎂
          </div>
        </div>
      </div>

      <p className="wish-desc" style={{ fontSize: '1.1rem', margin: '0 auto 30px auto', lineHeight: '1.6', opacity: 0.9 }}>
        "May your life be filled with sweet moments, endless smiles, and pure joy!" ❤️
      </p>

      {/* Action Button */}
      <button
        className="btn-primary"
        onClick={handleBlowAndNext}
        type="button"
        style={{
          margin: '0 auto',
          cursor: 'pointer',
          padding: '14px 36px',
          fontSize: '1.1rem',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          zIndex: 100,
          boxShadow: '0 10px 25px rgba(244, 63, 94, 0.4)'
        }}
      >
        <span>Blow Candles & Continue</span>
        <span>🎉</span>
      </button>
    </div>
  );
}