import React from 'react';
import './Footer.css';

const Footer = props => {
  return (
    <div className="footer-container">
      <i className="far fa-comment" />
      <i className="fas fa-retweet icon"> 6</i>
      <i className="far fa-heart icon"> 4</i>
      <i className="far fa-envelope icon" />
    </div>
  );
};

export default Footer;
