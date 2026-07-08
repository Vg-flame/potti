import React, { useState, useEffect } from "react";

interface SurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SurpriseModal: React.FC<SurpriseModalProps> = ({ isOpen, onClose }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number; delay: number }>
  >([]);
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Create sparkles
      const sparklesData = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }));
      setSparkles(sparklesData);

      // Show letter after sparkles animation
      setTimeout(() => setShowLetter(true), 1000);
    } else {
      setShowLetter(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="surprise-modal-overlay" onClick={onClose}>
      <div className="surprise-modal" onClick={(e) => e.stopPropagation()}>
        {/* Sparkles Animation */}
        <div className="modal-sparkles">
          {sparkles.map((sparkle) => (
            <div
              key={sparkle.id}
              className="modal-sparkle"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        {/* Handwritten Love Letter */}
        <div className={`handwritten-letter ${showLetter ? "show" : ""}`}>
          <div className="letter-paper">
            <div className="letter-header">
              <h2 className="handwritten-title">Potti</h2>
            </div>
            <div className="handwritten-content">
              <p className="handwritten-line">
                Every moment with you feels like magic...
                epudu ninu badha petanu 
              </p>
              <p className="handwritten-line">
                You are the light that brightens my darkest days,
                ninu entha premistha ani chepalenu
              </p>
              <p className="handwritten-line">
                the melody that makes my heart sing,
                ni voice naku vinipisthe it make me feel plesent 
              </p>
              <p className="handwritten-line">
                and the dream I never want to wake up from.
                i am sorry it was unexpected so try to understand and forgive me 
              </p>
              <p className="handwritten-line">
                I love you more than words can express.
              </p>
              <div className="handwritten-signature">
                Forever yours,
                What ever it may I Love you so much.....
                <br />
                <span className="signature-name">Your Pandii</span>
              </div>
            </div>
          </div>
        </div>

        <button className="close-modal" onClick={onClose}>
          ×
        </button>
      </div>
    </div>
  );
};

export default SurpriseModal;
