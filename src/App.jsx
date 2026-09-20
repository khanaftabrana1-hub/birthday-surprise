import React, { useState } from "react";
import StepOneWish from "./component/StepOneWish";
import StepZeroCake from "./component/StepZeroCake";
import StepTwoGallery from "./component/StepTwoGallery";
import StepThreeLetter from "./component/StepThreeLetter";
import "./index.css";

export default function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="app-container" style={{ position: "relative", minHeight: "100vh" }}>
      <div className="glow-orb-1" style={{ pointerEvents: "none" }}></div>
      <div className="glow-orb-2" style={{ pointerEvents: "none" }}></div>

      {/* Step 1: Tap / Wish Screen */}
      {step === 1 && <StepOneWish onNext={() => setStep(2)} />}

      {/* Step 2: Cake Screen */}
      {step === 2 && <StepZeroCake onNext={() => setStep(3)} />}

      {/* Step 3: Photo Gallery */}
      {step === 3 && <StepTwoGallery onNext={() => setStep(4)} />}

      {/* Step 4: Birthday Letter */}
      {step === 4 && <StepThreeLetter onReset={() => setStep(1)} />}
    </div>
  );
}