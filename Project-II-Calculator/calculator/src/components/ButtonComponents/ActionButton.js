import React from 'react';
import './Button.css';


const ActionButton = props => <p className={`button action-button ${props.fontWeight}`}>{props.text}</p>

export default ActionButton;