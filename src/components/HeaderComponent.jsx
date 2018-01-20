import React from 'react';
import { Link } from 'react-router-dom';


function HeaderComponent(){
  const backgroundColor = {
    background: '#E3DDD0',
  };

  const circle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'radial-gradient(69% -18%, #E3DDD0 42%, #B96982 100%)'
  };
  return (
    <div style={backgroundColor}>
      <div style={circle}>
        <h1><Link to="/">animicon</Link></h1>
      </div>
    </div>
  );
}

export default HeaderComponent;
