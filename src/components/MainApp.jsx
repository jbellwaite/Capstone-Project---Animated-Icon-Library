import React from 'react';
import IconComponent from './IconComponent';
import HamburgerMenuIcon from './icons/HamburgerMenu';


const main = {
  display:'flex'
};

const iconBox = {
  width: '33%'
};

const icon = {
  width: '100%',
};

const masterIconList = [
  {
    image:<HamburgerMenuIcon></HamburgerMenuIcon>,
    code: <HamburgerMenuIcon></HamburgerMenuIcon>
  },
  {
    image:<HamburgerMenuIcon></HamburgerMenuIcon>,
  },

];

function MainApp(){

  return (
    <div style={main}>
      <div style={iconBox}>
        <div style={icon}>
          {masterIconList.map((icon, index) =>
            <IconComponent
              image={icon.image}
              code={icon.code}
              key={index}
            />
          )}
        </div>
      </div>
    </div>
  );

}

export default MainApp;
