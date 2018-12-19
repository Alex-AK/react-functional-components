import React from 'react';
import './Card.css';


const CardContent = (props) => {
  return (
    <div className="card-content">
      <h1 className="card-content-title">{props.title}</h1>
      <p className="card-content-text">{props.text}</p>
      <p className="card-link"><a href="reactjs.org">{props.link}</a></p>
    </div>
  )
};


export default CardContent;