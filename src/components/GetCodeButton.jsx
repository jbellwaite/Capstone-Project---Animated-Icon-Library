import React from 'react';
import ArrowDownIcon from '../assets/images/arrowdown.png';

function GetCodeButton(){
  const buttonStyle={
    display: 'flex',
    boxShadow: '0 4px 7px 0 rgba(0,0,0,0.50)',
    border: '10px solid #163742',
    borderRadius: '15px',
    justifyContent: 'center',
    alignItems: 'center',
  }
  const arrowDownIcon={
    width: '10%',
  }
  const getCode={
    width: '70%',
  }

  return (
    <div style = {buttonStyle}>
      <img src={ArrowDownIcon} style={arrowDownIcon}/>
      <h2 style={getCode}>get code</h2>
    </div>
  );
}

export default GetCodeButton;
