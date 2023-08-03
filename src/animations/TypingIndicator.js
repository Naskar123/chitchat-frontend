import React from 'react';
import './TypingIndicator.css';

const TypingIndicator = () => {
  return (
    <div display ="flex">
        <span display ="flex" className="dot">.</span>
        <span display ="flex" className="dot">.</span>
        <span display ="flex" className="dot">.</span>
    </div>
  );
}

export default TypingIndicator;