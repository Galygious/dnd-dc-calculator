// src/DCForm.js

import React, { useState } from 'react';

const DCForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    targetSize: '',
    distance: '',
    weaponType: '',
    projectile: '',
    environment: '',
    movement: '',
    cover: '',
    visibility: '',
    special: 0,
    dexModifier: 0,
    proficiencyBonus: 0,
    additionalBonuses: 0,
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleNumberChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: parseInt(value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate required fields
    const requiredFields = [
      'targetSize',
      'distance',
      'weaponType',
      'projectile',
      'environment',
      'movement',
      'cover',
      'visibility',
      'dexModifier',
      'proficiencyBonus',
      'additionalBonuses',
    ];

    for (let field of requiredFields) {
      if (
        formData[field] === '' ||
        formData[field] === null ||
        formData[field] === undefined
      ) {
        alert('Please fill out all required fields.');
        return;
      }
    }

    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="dc-form">
      {/* Target Size */}
      <div className="form-group">
        <label htmlFor="targetSize">Target Size:</label>
        <select
          id="targetSize"
          value={formData.targetSize}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="0">Large (e.g., ogre) [+0 DC]</option>
          <option value="2">Medium (e.g., human) [+2 DC]</option>
          <option value="5">Small (e.g., squirrel) [+5 DC]</option>
          <option value="8">Tiny (e.g., hummingbird) [+8 DC]</option>
        </select>
      </div>

      {/* Distance */}
      <div className="form-group">
        <label htmlFor="distance">Distance (feet):</label>
        <input
          type="number"
          id="distance"
          min="0"
          value={formData.distance}
          onChange={handleNumberChange}
          required
        />
        <small>For every 10 feet beyond 20 ft, +1 DC</small>
      </div>

      {/* Weapon Type */}
      <div className="form-group">
        <label htmlFor="weaponType">Weapon Type:</label>
        <select
          id="weaponType"
          value={formData.weaponType}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="3">Heavy Crossbow [+3 DC]</option>
          <option value="2">Longbow [+2 DC]</option>
          <option value="1">Shortbow [+1 DC]</option>
          <option value="0">Light Crossbow [+0 DC]</option>
        </select>
      </div>

      {/* Projectile Characteristics */}
      <div className="form-group">
        <label htmlFor="projectile">Projectile Characteristics:</label>
        <select
          id="projectile"
          value={formData.projectile}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="0">Standard [+0 DC]</option>
          <option value="2">Heavy/Unwieldy [+2 DC]</option>
          <option value="-1">Light/Fast [-1 DC]</option>
        </select>
      </div>

      {/* Environmental Conditions */}
      <div className="form-group">
        <label htmlFor="environment">Environmental Conditions:</label>
        <select
          id="environment"
          value={formData.environment}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="0">Calm [+0 DC]</option>
          <option value="2">Windy [+2 DC]</option>
          <option value="4">Rainy/Obscured [+4 DC]</option>
        </select>
      </div>

      {/* Movement of Target */}
      <div className="form-group">
        <label htmlFor="movement">Movement of Target:</label>
        <select
          id="movement"
          value={formData.movement}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="0">Stationary [+0 DC]</option>
          <option value="3">Moving [+3 DC]</option>
        </select>
      </div>

      {/* Cover and Concealment */}
      <div className="form-group">
        <label htmlFor="cover">Cover and Concealment:</label>
        <select
          id="cover"
          value={formData.cover}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="0">No Cover [+0 DC]</option>
          <option value="2">Partial Cover [+2 DC]</option>
          <option value="5">Full Cover [+5 DC]</option>
        </select>
      </div>

      {/* Visibility */}
      <div className="form-group">
        <label htmlFor="visibility">Visibility:</label>
        <select
          id="visibility"
          value={formData.visibility}
          onChange={handleChange}
          required
        >
          <option value="">--Select--</option>
          <option value="0">Clear [+0 DC]</option>
          <option value="2">Dim Light [+2 DC]</option>
          <option value="5">Darkness [+5 DC]</option>
        </select>
      </div>

      {/* Special Conditions */}
      <div className="form-group">
        <label htmlFor="special">Special Conditions:</label>
        <input
          type="number"
          id="special"
          value={formData.special}
          onChange={handleNumberChange}
          min="-10"
          max="10"
        />
        <small>Enter any additional DC modifiers (e.g., magical interference)</small>
      </div>

      {/* Attacker's Bonuses */}
      <div className="form-group">
        <label htmlFor="dexModifier">Attacker's Dexterity Modifier:</label>
        <input
          type="number"
          id="dexModifier"
          value={formData.dexModifier}
          onChange={handleNumberChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="proficiencyBonus">Proficiency Bonus:</label>
        <input
          type="number"
          id="proficiencyBonus"
          value={formData.proficiencyBonus}
          onChange={handleNumberChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="additionalBonuses">Additional Bonuses (e.g., Expertise, Magic Items):</label>
        <input
          type="number"
          id="additionalBonuses"
          value={formData.additionalBonuses}
          onChange={handleNumberChange}
          required
        />
      </div>

      <button type="submit">Calculate DC</button>
    </form>
  );
};

export default DCForm;
