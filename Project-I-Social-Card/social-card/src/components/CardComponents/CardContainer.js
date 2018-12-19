import React from 'react';
import './Card.css';
import ReactBanner from './CardBanner';
import CardContent from './CardContent';



const CardContainer = () => {
  return (
    <div className="card-container">
      <ReactBanner />
      <CardContent title="Get Started with React" text="React Makes it painless to create interactive UIs. Design simple views for each state in your application." link="reactjs.org" />
    </div>
  )
}



export default CardContainer;