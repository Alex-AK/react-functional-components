import React from 'react';
import './Header.css';



const HeaderTitle = props => <h1 className="header-title">{props.title} <span>{props.subtitle}</span></h1>;



export default HeaderTitle;