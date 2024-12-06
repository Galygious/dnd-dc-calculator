// src/App.js

import React, { useState } from 'react';
import './App.css';
import DCForm from './DCForm';
import DCResult from './DCResult';

function App() {
  const [result, setResult] = useState(null);

  const calculateDC = (data) => {
    const {
      targetSize,
      distance,
      weaponType,
      projectile,
      environment,
      movement,
      cover,
      visibility,
      special,
      dexModifier,
      proficiencyBonus,
      additionalBonuses,
    } = data;

    // Base DC
    const baseDC = 10;

    // Calculate Distance Modifier
    let distanceModifier = 0;
    if (distance > 20) {
      distanceModifier = Math.floor((distance - 20) / 10);
    }

    // Ensure distance modifier is not negative
    distanceModifier = distanceModifier < 0 ? 0 : distanceModifier;

    // Calculate Total DC
    const totalDC =
      baseDC +
      parseInt(targetSize) +
      distanceModifier +
      parseInt(weaponType) +
      parseInt(projectile) +
      parseInt(environment) +
      parseInt(movement) +
      parseInt(cover) +
      parseInt(visibility) +
      parseInt(special);

    // Calculate Skill Check Total
    const skillCheckTotal =
      parseInt(dexModifier) +
      parseInt(proficiencyBonus) +
      parseInt(additionalBonuses);

    // Calculate Required d20 Roll
    const requiredRoll = totalDC - skillCheckTotal;
    let minRoll;
    if (requiredRoll > 20) {
      minRoll = 'Impossible';
    } else if (requiredRoll <= 1) {
      minRoll = '1+';
    } else {
      minRoll = requiredRoll;
    }

    // Calculate Success Probability
    let probability;
    if (requiredRoll > 20) {
      probability = '0%';
    } else if (requiredRoll <= 1) {
      probability = '100%';
    } else {
      probability = `${(21 - requiredRoll) * 5}%`;
    }

    setResult({
      totalDC,
      skillCheckTotal,
      minRoll,
      probability,
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>D&D Ranged Attack DC Calculator</h1>
        <DCForm onCalculate={calculateDC} />
        {result && <DCResult result={result} />}
      </div>
    </div>
  );
}

export default App;
