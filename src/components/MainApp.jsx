import React from 'react';
import HamburgerIconComponent from './HamburgerIconComponent';
import ArrowDownIcon from './ArrowDownIconComponent';
import ArrowUpIconComponent from './ArrowupIconComponent';
import { Link } from 'react-router-dom';


function MainApp(){
const main = {
  display:'flex'
}

const iconBox = {
  width: '33%'
}

const icon = {
  width: '100%',
}

  return (
    <div style={main}>
      <div style={iconBox}>
        <HamburgerIconComponent style={icon}></HamburgerIconComponent>
      </div>
      <div style={iconBox}>
        <ArrowDownIcon></ArrowDownIcon>
      </div>
      <div style={iconBox}>
        <ArrowUpIconComponent></ArrowUpIconComponent>
      </div>
    </div>
  );
}

export default MainApp;
