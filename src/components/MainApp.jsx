import React from 'react';
// import HamburgerIconComponent from './HamburgerIconComponent';
import GetCodeButton from './GetCodeButton';
// import { Link } from 'react-router-dom';
// import ReactHover from 'react-hover';
// import { Switch, Route } from 'react-router-dom';
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
class MainApp extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      clickButtonVisibleOnPage: false
    };
    this.getCode = this.getCode.bind(this);
  }

  getCode(){
    let makeButtonVisible = !this.state.clickButtonVisibleOnPage;
    this.setState({clickButtonVisibleOnPage: makeButtonVisible});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.clickButtonVisibleOnPage === true){
      currentlyVisibleContent = <div><GetCodeButton></GetCodeButton></div>;
      console.log('Get Code Button Should Appear');
    } else {
      currentlyVisibleContent = null;
      console.log('No Get Code Button Should Dsiaply');
    }
    return (
      <div style={main}>
        <div style={iconBox}>
          <div style={icon} onClick={this.getCode}>
            {masterIconList.map((profile, index) =>
              <IconComponent
                image={profile.image}
                key={index}/>
            )}
            <div>{currentlyVisibleContent}</div>
          </div>
        </div>
      </div>
    );
  }
}

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
