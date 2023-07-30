import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import './App.css';

const Summarizer = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);

  const handleSummarize = async () => {
    setIsLoading(true);

    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
      }
    };

    await axios.post('/summarize', { text },axiosConfig)
    .then((res) => {
      const new_summary  = res.data[0].summary_text;
      console.log("RESPONSE RECEIVED: ", new_summary);
      setSummary(new_summary);

      // Clear the textarea
      setText('');

      // Add the original text and summary to cards
      setCards((prevCards) => [
        ...prevCards,
        { id: Date.now(), text: text, summary: new_summary },
      ]);

    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
    .finally(() => {
      setIsLoading(false);
    });

  };

  return (
    <div>
      <Header />
      <textarea
        rows={10}
        cols={50}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
      />
      <button
        className={isLoading ? 'loading-button' : ''}
        onClick={handleSummarize}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Summarize'}
      </button>

      {cards.slice().reverse().map((card) => (
        <Card class="container" key={card.id} text={card.text} summary={card.summary} />
      ))}


      <Footer />
    </div>
  );
};

export default Summarizer;
