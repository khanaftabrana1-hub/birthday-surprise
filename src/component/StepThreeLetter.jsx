import React from 'react';

export default function StepThreeLetter({ onReset }) {
  return (
    <div className="letter-container">
      <div className="letter-card">
        <div className="letter-header">
          <span style={{ fontSize: '1.5rem' }}>💖</span>
          <div className="sub-heading" style={{ margin: 0 }}>TO THE LOVE OF MY LIFE</div>
          <span style={{ fontSize: '1.2rem' }}>✨</span>
        </div>

        <div className="letter-body">
          <p>
            Happy Birthday to the girl who owns my entire heart. From the exact moment you walked into my life, everything changed for the better. You brought a kind of warmth, peace, and magic that I never even knew existed. Your smile is my absolute favorite sight in the world, and your laugh is the sweetest melody I could ever listen to. You are not just my love—you are my safe space, my best friend, my greatest comfort, and my entire home.
          </p>
          <p>
            I fall deeper in love with you every single day—in the quiet moments, in the shared laughs, and in every soft glance. Thank you for loving me, for choosing me, and for filling my life with pure happiness. On your special day, I want to promise you that I will cherish you, protect your happiness, and love you endlessly through every chapter of our lives.
          </p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px 0 0 0', color: '#f43f5e' }}>
            Happy Birthday, my love, my soulmate, my forever. ❤️
          </p>
        </div>

        <div className="letter-footer">
          <div style={{ fontSize: '0.8rem', color: '#f472b6' }}>Yours Always,</div>
          <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffffff' }}>With All My Love ❤️</div>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className="btn-reset" onClick={onReset}>
          ↺ Start From Beginning
        </button>
      </div>
    </div>
  );
}