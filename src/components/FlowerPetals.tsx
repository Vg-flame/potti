import React, { useEffect, useState } from 'react';

const FlowerPetals: React.FC = () => {
  const [petals, setPetals] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Create petals with random positions and timing
    const petalsData = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 8 + Math.random() * 4
    }));
    setPetals(petalsData);
  }, []);

  return (
    <div className="flower-petals-container">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="flower-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FlowerPetals;