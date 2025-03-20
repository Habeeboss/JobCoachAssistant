import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chatbot from './components/Chatbot';
import JobMatches from './components/JobMatches';
import AccessibilitySettings from './components/AccessibilitySettings';
import './styles/accessibility.css';

const App = () => {
  const userId = 1; // Example user ID
  const [accessibilitySettings, setAccessibilitySettings] = useState({});

  useEffect(() => {
    const fetchSettings = async () => {
      const response = await axios.get(`/api/users/${userId}`);
      setAccessibilitySettings(response.data.accessibilitySettings || {});
    };
    fetchSettings();
  }, [userId]);

  return (
    <div style={{ fontFamily: accessibilitySettings.font }}>
      <h1>Supported Employment Platform</h1>
      <Chatbot />
      <JobMatches userId={userId} />
      <AccessibilitySettings userId={userId} />
    </div>
  );
};

export default App;