// src/DCResult.js

import React from 'react';

const DCResult = ({ result }) => {
  const { totalDC, skillCheckTotal, minRoll, probability } = result;

  return (
    <div className="result">
      <h2>Calculation Results</h2>
      <p>
        <strong>Total DC:</strong> {totalDC}
      </p>
      <p>
        <strong>Attacker's Total Bonuses:</strong> +{skillCheckTotal}
      </p>
      <p>
        <strong>Minimum d20 Roll Required:</strong> {minRoll}
      </p>
      <p>
        <strong>Probability of Success:</strong> {probability}
      </p>
    </div>
  );
};

export default DCResult;
