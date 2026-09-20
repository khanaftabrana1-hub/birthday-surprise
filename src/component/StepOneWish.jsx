import React from "react";

export default function StepOneWish({ onNext }) {
  return (
    <div className="wish-container" style={{ textAlign: "center", padding: "20px" }}>
      <div className="gift-emoji" style={{ fontSize: "3.5rem", marginBottom: "10px" }}>🎁</div>
      <div className="sub-heading" style={{ letterSpacing: "2px", opacity: 0.8 }}>
        A SPECIAL SURPRISE AWAITS
      </div>
      <h1 className="main-heading" style={{ fontSize: "2.8rem", margin: "15px 0" }}>
        Happy Birthday, My Love! 🎂
      </h1>
      <p className="wish-desc" style={{ maxWidth: "500px", margin: "0 auto 30px auto", lineHeight: "1.6" }}>
        "Wishing you a day filled with love, laughter, and all your favorite things! Happy Birthday!"
      </p>

      <button 
        className="btn-primary" 
        onClick={onNext}
        type="button"
        style={{ 
          margin: "0 auto", 
          cursor: "pointer", 
          position: "relative", 
          zIndex: 999,
          padding: "14px 32px",
          fontSize: "1.1rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <span>Tap to Celebrate</span>
        <span>🎉</span>
      </button>
    </div>
  );
}