import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} SUMMARIZER. All rights reserved.</p>
      <p>
        Powered by <a href="https://www.your-website-url.com">🤗 Huggingface Api</a>
      </p>
    </footer>
  );
};

export default Footer;
