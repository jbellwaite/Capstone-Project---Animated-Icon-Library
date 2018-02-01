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
        <div>{this.props.code}</div>
        <div>{currentlyVisibleContent}</div>
      </div>
    );
  }
}
IconComponent.propTypes = {
  image: PropTypes.object,
  code: PropTypes.string,
};


export default IconComponent;
