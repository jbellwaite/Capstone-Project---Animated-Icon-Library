import React from 'react';
import PropTypes from 'prop-types';
import hamburgerMenu from '../assets/images/hamburgermenu.png';
import IconComponent from '../components/icons/IconIndex';
import arrowUp from '../assets/images/arrowup.png';
import arrowDownIcon from '../assets/images/arrowdown.png';
import IconIndex from './icons/IconIndex';

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
    image:<img src={IconIndex}/>,
  },
  {
    image:<img src={arrowUp}/>,
  },
  {
    image:<img src={arrowDownIcon}/>,
  },
];

function MainApp(){
  console.log(IconIndex);

  return (
    <div style={main}>
      <IconIndex></IconIndex>
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
