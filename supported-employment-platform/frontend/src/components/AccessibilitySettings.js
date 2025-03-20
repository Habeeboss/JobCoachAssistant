import React, { useState } from 'react';
import axios from 'axios';

const AccessibilitySettings = ({ userId }) => {
  const [font, setFont] = useState('Arial');
  const [textToSpeech, setTextToSpeech] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  const handleSave = async () => {
    try {
      await axios.put(`/api/users/${userId}`, {
        accessibilitySettings: { font, textToSpeech, highContrast }
      });
      alert('Accessibility settings saved successfully!');
    } catch (err) {
      alert('Failed to save settings. Please try again.');
    }
  };

  return (
    <div>
      <h2>Accessibility Settings</h2>
      <div>
        <label>
          Font:
          <select value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="Arial">Arial</option>
            <option value="OpenDyslexic">OpenDyslexic</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Enable Text-to-Speech:
          <input
            type="checkbox"
            checked={textToSpeech}
            onChange={(e) => setTextToSpeech(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          Enable High-Contrast Mode:
          <input
            type="checkbox"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
          />
        </label>
      </div>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default AccessibilitySettings;