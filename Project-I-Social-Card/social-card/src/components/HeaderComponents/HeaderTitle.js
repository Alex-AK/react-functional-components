import React from 'react';
import './Header.css';
import moment from 'moment';

console.log(moment);

const HeaderTitle = (props) => <h1 className="header-title">{props.title} <span>{props.subtitle}</span></h1>;

export default HeaderTitle;