import React from 'react';
import './Card.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const truncateText = (text, limit) => {
  const words = text.split(' ');
  const totalWords = words.length;
  if (totalWords > limit) {
    return {
      truncatedText: words.slice(0, limit).join(' ') + '...',
      totalWords: totalWords,
    };
  }
  return {
    truncatedText: text,
    totalWords: totalWords,
  };
};

const Card = ({ text, summary }) => {
  const handleCopySummary = () => {
    navigator.clipboard.writeText(summary);
  };

  const { truncatedText, totalWords } = truncateText(text, 50);

  return (
    <div className="card">
      <div className="card-header">
        <button className="copy-button" onClick={handleCopySummary}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
      <div className="card-content">
        <p>{truncatedText}</p>
        <p style={{color: "grey",textAlign: 'center'}} >Total Words: {totalWords}</p>
      </div>
      <div className="separator">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="card-content">
        <p>{summary}</p>
      </div>
    </div>
  );
};

export default Card;
