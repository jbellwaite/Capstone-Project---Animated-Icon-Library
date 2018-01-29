import React from 'react';
import PropTypes from 'prop-types';
import hamburgerMenu from '../assets/images/hamburgermenu.png';
import IconComponent from './IconComponent';
import arrowUp from '../assets/images/arrowup.png';
import arrowDownIcon from '../assets/images/arrowdown.png';

const main = {
  display:'flex'
};

const iconBox = {
  width: '33%'
};

const icon = {
  width: '100%',
};

var masterIconList = [
  {
    image:<img src={hamburgerMenu}/>,
  },
  {
    image:<img src={arrowUp}/>,
  },
  {
    image:<img src={arrowDownIcon}/>,
  },
];

function MainApp(){

  return (
    <div style={main}>
      <div style={iconBox}>
        <div style={icon}>
          {masterIconList.map((profile, index) =>
            <IconComponent
              image={profile.image}
              key={index}
            />
          )}
        </div>
      </div>
    </div>
  );

}

MainApp.propTypes = {
  onNewIcon: PropTypes.func
};

export default MainApp;


//
// <ReactHover>
//   <ReactHover.Trigger type='trigger'>
//     <HamburgerIconComponent style={icon} />
//   </ReactHover.Trigger>
//   <ReactHover.Hover type='hover'>
//     <GetCodeButton />
//   </ReactHover.Hover>
// </ReactHover>
//
