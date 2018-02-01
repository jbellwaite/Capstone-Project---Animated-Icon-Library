import React from 'react';
import PropTypes from 'prop-types';
import GetCodeButton from './GetCodeButton';
import Style from 'style-it';

class IconComponent extends React.Component{
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
      currentlyVisibleContent = <GetCodeButton></GetCodeButton>;
    } else {
      currentlyVisibleContent = false;
    }
    return (
      <div>
        <div onClick={this.getCode}>{this.props.image}</div>
        <pre>{'`.hamburger {width: 105.5px;height: 149px;background: url("https://photos-2.dropbox.com/t/2/AAAM7IG696shSWvSxloLe5prbCo0yIdHHxh4jTQsmAiJ4A/12/727371901/png/32x32/1/_/1/2/hamburgermenu.png/EIDRivUHGCYgAigC/pzLE2m6RvYxYUNP2fozmmrGM9HfGbY7h0_TC7W7liKk?preserve_transparency=1&size=2048x1536&size_mode=3")  left center no-repeat;.hamburger:hover{animation: play 0.5s steps(19);}@keyframes play {100% {background-position: -2046px;},`<div className="hamburger"></div>'}</pre>
        <div>{currentlyVisibleContent}</div>
      </div>
    );
  }
}
IconComponent.propTypes = {
  image: PropTypes.object,
  code: PropTypes.object,
};


export default IconComponent;
