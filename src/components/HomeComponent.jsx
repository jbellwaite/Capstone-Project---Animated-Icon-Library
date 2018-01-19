import React from 'react';
import { Link } from 'react-router-dom';

function HomeComponent(){
  const animatedIconButton={
    backgroundColor:'lightyellow',
  };
  const threeBoxes={
    display:'flex',
  };
  const boxStyle={
    width:'33%',
  };

  return (
    <div>
      <h2>Get animated icons, easily</h2>
      <Link to="/mainapp">
        <div style={animatedIconButton}>
          get icons
        </div>
      </Link>
      <div style={threeBoxes}>
        <div style={boxStyle}>
          <image></image>
          <p>Beautiful, commonly-used icons</p>
        </div>
        <div style={boxStyle}>
          <image></image>
          <p>Lightweight, easy to use interface</p>
        </div>
        <div style={boxStyle}>
          <image></image>
          <p>Requires no dowloading or bulky libraries to import</p>
        </div>
      </div>

    </div>
  );
}



export default HomeComponent;
