import React from 'react';
import IconComponent from './IconComponent';

let masterIconList = [
  {
    image: 'image source goes here',
    description: 'Hamburger Menu'
  },
  {
    image: 'image source goes here',
    description: 'Arrow'
  }
];


function MainApp(){
  return (
    <div>
      <p>Nothing in the main app component right now</p>
      {masterIconList.map((icon, index) =>
        <IconComponent image={icon.image}
          description={icon.description}
          key={index}
        />
      )}
    </div>
  );
}

export default MainApp;
