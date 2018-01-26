import React from 'react';
import HamburgerIconComponent from './HamburgerIconComponent';
import GetCodeButton from './GetCodeButton';
// import { Link } from 'react-router-dom';
import ReactHover from 'react-hover';

const main = {
  display:'flex'
};

const iconBox = {
  width: '33%'
};

const icon = {
  width: '100%',
};

class MainApp extends React.Component{

  render(){
    return (
      <div style={main}>
        <div style={iconBox}>
          <ReactHover>
            <ReactHover.Trigger type='trigger'>
              <HamburgerIconComponent style={icon} />
            </ReactHover.Trigger>
            <ReactHover.Hover type='hover'>
              <GetCodeButton />
            </ReactHover.Hover>
          </ReactHover>
        </div>
      </div>
    );
  }
}

export default MainApp;
